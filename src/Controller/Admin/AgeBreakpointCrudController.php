<?php

namespace App\Controller\Admin;

use App\Entity\AgeBreakpoint;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class AgeBreakpointCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AgeBreakpoint::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
