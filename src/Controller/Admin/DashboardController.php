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
    public function __construct(private readonly AdminUrlGenerator $adminUrlGenerator)
    {
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

    #[Route(path: '/admin')]
    public function index(): Response
    {
        return $this->redirect($this->adminUrlGenerator->setController(UserCrudController::class)->generateUrl());
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToLogout('Logout', 'fas fa-sign-out-alt text-danger')->setCssClass('text-danger');
        yield MenuItem::section('Interventions');
        yield MenuItem::linkToCrud('permanences', 'fas fa-home', Permanence::class);
        yield MenuItem::linkToCrud('workshops', 'fas fa-briefcase', Workshop::class);

        if ($this->isGranted('ROLE_SUPER_ADMIN')) {
            yield MenuItem::section('Utilisateurs et Centres');
            yield MenuItem::linkToCrud('users', 'fas fa-users', User::class);
            yield MenuItem::linkToCrud('centers', 'fas fa-home', Center::class);
            yield MenuItem::linkToCrud('center_tags', 'fas fa-tags', CenterTag::class);
            yield MenuItem::section('Données');
            yield MenuItem::linkToCrud('topics', 'fas fa-comment', Topic::class);
            yield MenuItem::linkToCrud('skills', 'fas fa-hand-paper', Skill::class);
            yield MenuItem::linkToCrud('age_breakpoints', 'fas fa-birthday-cake', AgeBreakpoint::class);
            yield MenuItem::linkToCrud('durations', 'fas fa-clock', Duration::class);
            yield MenuItem::linkToCrud('participant_kinds', 'fas fa-users', ParticipantKind::class);
            yield MenuItem::linkToCrud('equipment_supplier', 'fas fa-truck', EquipmentSupplier::class);
            yield MenuItem::linkToCrud('used_equipments', 'fas fa-tools', UsedEquipment::class);
        }
    }
}
