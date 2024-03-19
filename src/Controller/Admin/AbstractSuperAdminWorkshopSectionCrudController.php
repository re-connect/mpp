<?php

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AbstractSuperAdminWorkshopSectionCrudController extends AbstractSuperAdminController
{
    public static function getEntityFqcn(): string
    {
        return '';
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IntegerField::new('id', 'ID')->hideOnForm(),
            TextField::new('name', 'name'),
        ];
    }
}
