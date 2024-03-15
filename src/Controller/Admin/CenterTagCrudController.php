<?php

namespace App\Controller\Admin;

use App\Entity\CenterTag;

class CenterTagCrudController extends AbstractSuperAdminController
{
    public static function getEntityFqcn(): string
    {
        return CenterTag::class;
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
