<?php

namespace App\Controller\Admin;

use App\Entity\Center;
use App\Entity\CenterTag;
use App\Entity\EquipmentSupplier;
use App\Entity\ParticipantKind;
use App\Entity\Permanence;
use App\Entity\Project;
use App\Entity\Skill;
use App\Entity\Topic;
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
            ->setTitle('EasyAdmin');
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
        yield MenuItem::linkToCrud('Center', 'fas fa-folder-open', Center::class);
        yield MenuItem::linkToCrud('Tag', 'fas fa-tags', CenterTag::class);
        yield MenuItem::linkToCrud('User', 'fas fa-folder-open', User::class);
        yield MenuItem::linkToCrud('Permanence', 'fas fa-folder-open', Permanence::class);
        yield MenuItem::linkToCrud('Workshop', 'fas fa-folder-open', Workshop::class);
        yield MenuItem::linkToCrud('Topic', 'fas fa-tags', Topic::class);
        yield MenuItem::linkToCrud('Skill', 'fas fa-tags', Skill::class);
        yield MenuItem::linkToCrud('ParticipantKind', 'fas fa-tags', ParticipantKind::class);
        yield MenuItem::linkToCrud('EquipmentSupplier', 'fas fa-tags', EquipmentSupplier::class);
    }
}
