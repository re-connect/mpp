<?php

namespace App\Controller\Admin;

use App\Entity\UsedEquipment;

class UsedEquipmentCrudController extends AbstractSuperAdminController
{
    public static function getEntityFqcn(): string
    {
        return UsedEquipment::class;
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
