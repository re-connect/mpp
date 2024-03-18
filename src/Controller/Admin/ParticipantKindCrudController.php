<?php

namespace App\Controller\Admin;

use App\Entity\ParticipantKind;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class ParticipantKindCrudController extends AbstractSuperAdminWorkshopSectionCrudController
{
    public static function getEntityFqcn(): string
    {
        return ParticipantKind::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('participant_kind')
            ->setEntityLabelInPlural('participant_kinds')
            ->setSearchFields(['id', 'name']);
    }
}
