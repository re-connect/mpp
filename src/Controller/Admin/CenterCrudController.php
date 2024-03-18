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
            ->setEntityLabelInSingular('center')
            ->setEntityLabelInPlural('centers')
            ->setSearchFields(['id', 'name'])
            ->setDefaultSort(['id' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        $name = TextField::new('name', 'name');
        $place = TextField::new('place', 'place')->setRequired(false)->setEmptyData(Center::PLACE_DEFAULT_VALUE);
        $permanences = AssociationField::new('permanences', 'permanences_count');
        $workshops = AssociationField::new('workshops', 'workshops_count');
        $tags = AssociationField::new('tags', 'center_tags')->setFormTypeOption('by_reference', false);
        $id = IntegerField::new('id', 'ID');
        $workshop = BooleanField::new('workshop', 'workshop');
        $permanence = BooleanField::new('permanence', 'permanence');
        $enabled = BooleanField::new('enabled', 'enabled');

        if (Crud::PAGE_INDEX === $pageName || Crud::PAGE_DETAIL === $pageName) {
            return [$id, $name, $place, $permanences, $workshops, $tags, $permanence, $workshop, $enabled];
        }

        return [$name, $place, $tags, $workshop, $permanence, $enabled];
    }
}
