<?php

namespace App\Controller\Admin;

use App\Entity\CenterTag;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CenterTagCrudController extends AbstractSuperAdminController
{
    public static function getEntityFqcn(): string
    {
        return CenterTag::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('center_tag')
            ->setEntityLabelInPlural('center_tags')
            ->setSearchFields(['id', 'name']);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IntegerField::new('id', 'ID')->hideOnForm(),
            TextField::new('name', 'name'),
            TextField::new('color', 'color'),
            TextField::new('category', 'category'),
        ];
    }
}
