<?php

namespace App\Controller\Admin;

use App\Entity\UsedEquipment;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class UsedEquipmentCrudController extends AbstractSuperAdminWorkshopSectionCrudController
{
    public static function getEntityFqcn(): string
    {
        return UsedEquipment::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('used_equipment')
            ->setEntityLabelInPlural('used_equipments');
    }
}
