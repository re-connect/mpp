<?php

namespace App\Controller\Admin;

use App\Entity\Skill;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class SkillCrudController extends AbstractSuperAdminWorkshopSectionCrudController
{
    public static function getEntityFqcn(): string
    {
        return Skill::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('skill')
            ->setEntityLabelInPlural('skills');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            ...parent::configureFields($pageName),
            AssociationField::new('topic', 'topic'),
        ];
    }
}
