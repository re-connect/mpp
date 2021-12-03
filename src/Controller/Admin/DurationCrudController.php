<?php

namespace App\Controller\Admin;

use App\Entity\Duration;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class DurationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Duration::class;
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
