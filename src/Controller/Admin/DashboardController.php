<?php

namespace App\Controller\Admin;

use App\Entity\AgeBreakpoint;
use App\Entity\Center;
use App\Entity\CenterTag;
use App\Entity\Duration;
use App\Entity\EquipmentSupplier;
use App\Entity\ParticipantKind;
use App\Entity\Permanence;
use App\Entity\Skill;
use App\Entity\Topic;
use App\Entity\UsedEquipment;
use App\Entity\User;
use App\Entity\Workshop;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    private AdminUrlGenerator $adminUrlGenerator;

    public function __construct(AdminUrlGenerator $adminUrlGenerator)
    {
        $this->adminUrlGenerator = $adminUrlGenerator;
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('MPP Admin')
            ->setFaviconPath('favicon.ico');
    }

    public function configureCrud(): Crud
    {
        return Crud::new();
    }

    /**
     * @Route("/admin")
     */
    public function index(): Response
    {
        return $this->redirect($this->adminUrlGenerator->setController(UserCrudController::class)->generateUrl());
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToLogout('Logout', 'fas fa-sign-out-alt text-danger')->setCssClass('text-danger');
        yield MenuItem::section('Interventions');
        yield MenuItem::linkToCrud('Permanence', 'fas fa-home', Permanence::class);
        yield MenuItem::linkToCrud('Workshop', 'fas fa-briefcase', Workshop::class);

        if ($this->isGranted('ROLE_SUPER_ADMIN')) {
            yield MenuItem::section('Utilisateurs et Centres');
            yield MenuItem::linkToCrud('User', 'fas fa-users', User::class);
            yield MenuItem::linkToCrud('Center', 'fas fa-home', Center::class);
            yield MenuItem::linkToCrud('Tag', 'fas fa-tags', CenterTag::class);
            yield MenuItem::section('Données');
            yield MenuItem::linkToCrud('Topic', 'fas fa-comment', Topic::class);
            yield MenuItem::linkToCrud('Skill', 'fas fa-hand-paper', Skill::class);
            yield MenuItem::linkToCrud('AgeBreakpoint', 'fas fa-birthday-cake', AgeBreakpoint::class);
            yield MenuItem::linkToCrud('Duration', 'fas fa-clock', Duration::class);
            yield MenuItem::linkToCrud('ParticipantKind', 'fas fa-users', ParticipantKind::class);
            yield MenuItem::linkToCrud('EquipmentSupplier', 'fas fa-truck', EquipmentSupplier::class);
            yield MenuItem::linkToCrud('UsedEquipment', 'fas fa-tools', UsedEquipment::class);
        }
    }
}
