<?php

namespace App\Controller\Admin;

use App\Entity\Workshop;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
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

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('date')
            ->add('nbParticipants')
            ->add('globalReport')
            ->add('topicPrecision')
            ->add('author')
            ->add('center')
            ->add('participantKinds')
            ->add('topics')
            ->add('ageBreakpoints')
            ->add('equipmentSuppliers')
            ->add('usedEquipments')
            ->add('usedVault')
            ->add('nbBeneficiariesAccounts')
            ->add('nbStoredDocs')
            ->add('nbCreatedEvents')
            ->add('nbCreatedContacts')
            ->add('nbCreatedNotes')
            ->add('skills')
            ->add('attendees')
            ->add('improvementAxis')
            ->add('duration');
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
        $participantKinds = AssociationField::new('participantKinds');
        $globalReport = TextField::new('globalReport');
        $author = AssociationField::new('author');
        $createdAt = DateTimeField::new('createdAt');
        $updatedAt = DateTimeField::new('updatedAt');
        $center = AssociationField::new('center');

        if (Crud::PAGE_DETAIL === $pageName) {
            return [$id, $date, $topicPrecision, $nbParticipants, $participantKinds, $globalReport, $center, $author, $createdAt, $updatedAt];
        } elseif (Crud::PAGE_NEW === $pageName || Crud::PAGE_EDIT === $pageName) {
            return [$date, $topicPrecision, $nbParticipants, $participantKinds, $globalReport, $center, $author, $createdAt, $updatedAt];
        }

        return [$id, $date, $participantKinds];
    }
}
