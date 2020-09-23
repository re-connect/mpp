<?php

namespace App\Controller\Admin;

use App\Entity\Center;
use App\Entity\Note;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

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

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToCrud('Center', 'fas fa-folder-open', Center::class);
        yield MenuItem::linkToCrud('User', 'fas fa-folder-open', User::class);
        yield MenuItem::linkToCrud('Note', 'fas fa-folder-open', Note::class);
    }
}
