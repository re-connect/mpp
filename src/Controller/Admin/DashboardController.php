<?php

namespace App\Controller\Admin;

use App\Entity\Center;
use App\Entity\CenterTag;
use App\Entity\Note;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\CrudUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
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
        $routeBuilder = $this->get(CrudUrlGenerator::class)->build();

        return $this->redirect($routeBuilder->setController(UserCrudController::class)->generateUrl());
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToCrud('Center', 'fas fa-folder-open', Center::class);
        yield MenuItem::linkToCrud('User', 'fas fa-folder-open', User::class);
        yield MenuItem::linkToCrud('Note', 'fas fa-folder-open', Note::class);
        yield MenuItem::linkToCrud('Tag', 'fas fa-tags', CenterTag::class);
    }
}
