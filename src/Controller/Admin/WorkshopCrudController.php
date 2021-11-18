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
            ->setEntityLabelInPlural('Workshop')
            ->setSearchFields(['id', 'name']);
    }

    public function configureFields(string $pageName): iterable
    {
        $id = IntegerField::new('id', 'ID');
        $date = DateField::new('date');
        $topic = AssociationField::new('topic');
        $topicPrecision = TextField::new('topicPrecision');
        $nbParticipants = IntegerField::new('nbParticipants');
        $participantKind = AssociationField::new('participantKind');
        $globalReport = TextField::new('globalReport');
        $center = AssociationField::new('center');
        $project = AssociationField::new('project');
        $createdAt = DateTimeField::new('createdAt');
        $updatedAt = DateTimeField::new('updatedAt');

        if (Crud::PAGE_DETAIL === $pageName) {
            return [$id, $date, $topic, $topicPrecision, $nbParticipants, $participantKind, $project, $globalReport, $center, $createdAt, $updatedAt];
        } elseif (Crud::PAGE_NEW === $pageName) {
            return [$date, $topic, $topicPrecision, $nbParticipants, $participantKind, $project, $globalReport, $center, $createdAt, $updatedAt];
        } elseif (Crud::PAGE_EDIT === $pageName) {
            return [$date, $topic, $topicPrecision, $nbParticipants, $participantKind, $project, $globalReport, $center, $createdAt, $updatedAt];
        }

        return [$id, $date, $topic, $topicPrecision, $nbParticipants];
    }
}
