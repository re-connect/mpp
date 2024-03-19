<?php

namespace App\Controller\Admin;

use App\Entity\Duration;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class DurationCrudController extends AbstractSuperAdminWorkshopSectionCrudController
{
    public static function getEntityFqcn(): string
    {
        return Duration::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('duration')
            ->setEntityLabelInPlural('durations')
            ->setSearchFields(['id', 'name']);
    }
}
