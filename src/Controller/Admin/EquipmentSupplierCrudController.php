<?php

namespace App\Controller\Admin;

use App\Entity\EquipmentSupplier;

class EquipmentSupplierCrudController extends AbstractSuperAdminController
{
    public static function getEntityFqcn(): string
    {
        return EquipmentSupplier::class;
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
