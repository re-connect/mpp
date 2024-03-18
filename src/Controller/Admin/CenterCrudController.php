<?php

namespace App\Controller\Admin;

use App\Entity\Center;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CenterCrudController extends AbstractSuperAdminController
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
            ->setSearchFields(['id', 'name'])
            ->setDefaultSort(['id' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        $name = TextField::new('name');
        $place = TextField::new('place')->setRequired(false)->setEmptyData(Center::PLACE_DEFAULT_VALUE);
        $permanences = AssociationField::new('permanences')->setLabel('permanences_count');
        $workshops = AssociationField::new('workshops')->setLabel('workshops_count');
        $tags = AssociationField::new('tags')->setFormTypeOption('by_reference', false);
        $id = IntegerField::new('id', 'ID');
        $workshop = BooleanField::new('workshop');
        $permanence = BooleanField::new('permanence');
        $enabled = BooleanField::new('enabled');

        if (Crud::PAGE_INDEX === $pageName || Crud::PAGE_DETAIL === $pageName) {
            return [$id, $name, $place, $permanences, $workshops, $tags, $permanence, $workshop, $enabled];
        }

        return [$name, $place, $tags, $workshop, $permanence, $enabled];
    }
}
