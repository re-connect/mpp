<?php

namespace App\Controller\Admin;

use App\Entity\AgeBreakpoint;
use App\Entity\Center;
use App\Entity\CenterTag;
use App\Entity\EquipmentSupplier;
use App\Entity\ParticipantKind;
use App\Entity\Permanence;
use App\Entity\Project;
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
        yield MenuItem::linkToCrud('User', 'fas fa-users', User::class);
        yield MenuItem::linkToCrud('Center', 'fas fa-home', Center::class);
        yield MenuItem::linkToCrud('Tag', 'fas fa-tags', CenterTag::class);
        yield MenuItem::section('Interventions');
        yield MenuItem::linkToCrud('Permanence', 'fas fa-home', Permanence::class);
        yield MenuItem::linkToCrud('Workshop', 'fas fa-briefcase', Workshop::class);
        yield MenuItem::section('Données');
        yield MenuItem::subMenu('Dropdowns', 'fas fa-database')->setSubItems([
            MenuItem::linkToCrud('Topic', 'fas fa-table', Topic::class),
            MenuItem::linkToCrud('Skill', 'fas fa-table', Skill::class),
            MenuItem::linkToCrud('ParticipantKind', 'fas fa-table', ParticipantKind::class),
            MenuItem::linkToCrud('EquipmentSupplier', 'fas fa-table', EquipmentSupplier::class),
            MenuItem::linkToCrud('AgeBreakpoint', 'fas fa-table', AgeBreakpoint::class),
            MenuItem::linkToCrud('UsedEquipment', 'fas fa-table', UsedEquipment::class),
        ]);
    }
}
