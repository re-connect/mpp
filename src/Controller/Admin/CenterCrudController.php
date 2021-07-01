<?php

namespace App\Controller\Admin;

use App\Entity\Center;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
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

        if (Crud::PAGE_INDEX === $pageName) {
            return [$id, $name, $notes, $tags];
        } elseif (Crud::PAGE_DETAIL === $pageName) {
            return [$id, $name, $notes, $tags];
        } elseif (Crud::PAGE_NEW === $pageName) {
            return [$name, $tags];
        } elseif (Crud::PAGE_EDIT === $pageName) {
            return [$name, $tags];
        }
    }
}
