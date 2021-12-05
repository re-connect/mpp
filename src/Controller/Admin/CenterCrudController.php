<?php

namespace App\Controller\Admin;

use App\Entity\Center;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CenterCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Center::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Center')
            ->setEntityLabelInPlural('Center')
            ->setSearchFields(['id', 'name']);
    }

    public function configureFields(string $pageName): iterable
    {
        $name = TextField::new('name');
        $notes = AssociationField::new('notes');
        $tags = AssociationField::new('tags')->setFormTypeOption('by_reference', false);
        $id = IntegerField::new('id', 'ID');
        $workshop = BooleanField::new('workshop');
        $permanence = BooleanField::new('permanence');

        if (Crud::PAGE_INDEX === $pageName || Crud::PAGE_DETAIL === $pageName) {
            return [$id, $name, $notes, $tags, $workshop, $permanence];
        }
        return [$name, $tags, $workshop, $permanence];
    }
}
