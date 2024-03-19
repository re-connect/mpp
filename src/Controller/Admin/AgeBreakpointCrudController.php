<?php

namespace App\Controller\Admin;

use App\Entity\AgeBreakpoint;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class AgeBreakpointCrudController extends AbstractSuperAdminWorkshopSectionCrudController
{
    public static function getEntityFqcn(): string
    {
        return AgeBreakpoint::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('age_breakpoint')
            ->setEntityLabelInPlural('age_breakpoints');
    }
}
