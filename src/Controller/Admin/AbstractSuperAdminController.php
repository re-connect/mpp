<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class AbstractSuperAdminController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return '';
    }

    public function configureActions(Actions $actions): Actions
    {
        $actions->setPermissions([
            Crud::PAGE_INDEX => User::ROLE_SUPER_ADMIN,
            Crud::PAGE_DETAIL => User::ROLE_SUPER_ADMIN,
            Crud::PAGE_NEW => User::ROLE_SUPER_ADMIN,
            Crud::PAGE_EDIT => User::ROLE_SUPER_ADMIN,
        ]);

        return parent::configureActions($actions);
    }
}
