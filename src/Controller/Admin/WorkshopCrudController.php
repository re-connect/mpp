<?php

namespace App\Controller\Admin;

use App\Entity\Workshop;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class WorkshopCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Workshop::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Workshop')
            ->setEntityLabelInPlural('Workshops')
            ->setSearchFields(['id', 'project', 'skills', 'participantKind']);
    }

    public function configureFields(string $pageName): iterable
    {
        $id = IntegerField::new('id', 'ID');
        $date = DateField::new('date');
        $topicPrecision = TextField::new('topicPrecision');
        $nbParticipants = IntegerField::new('nbParticipants');
        $participantKind = AssociationField::new('participantKind');
        $globalReport = TextField::new('globalReport');
        $author = AssociationField::new('author');
        $createdAt = DateTimeField::new('createdAt');
        $updatedAt = DateTimeField::new('updatedAt');
        $center = AssociationField::new('center');

        if (Crud::PAGE_DETAIL === $pageName) {
            return [$id, $date, $topicPrecision, $nbParticipants, $participantKind, $globalReport, $center, $author, $createdAt, $updatedAt];
        } elseif (Crud::PAGE_NEW === $pageName) {
            return [$date, $topicPrecision, $nbParticipants, $participantKind, $globalReport, $center, $author, $createdAt, $updatedAt];
        } elseif (Crud::PAGE_EDIT === $pageName) {
            return [$date, $topicPrecision, $nbParticipants, $participantKind, $globalReport, $center, $author, $createdAt, $updatedAt];
        }

        return [$id, $date, $participantKind];
    }
}
