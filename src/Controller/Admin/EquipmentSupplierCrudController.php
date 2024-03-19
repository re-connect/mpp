<?php

namespace App\Controller\Admin;

use App\Entity\EquipmentSupplier;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class EquipmentSupplierCrudController extends AbstractSuperAdminWorkshopSectionCrudController
{
    public static function getEntityFqcn(): string
    {
        return EquipmentSupplier::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('equipment_supplier')
            ->setEntityLabelInPlural('equipment_supplier')
            ->setSearchFields(['id', 'name']);
    }
}
