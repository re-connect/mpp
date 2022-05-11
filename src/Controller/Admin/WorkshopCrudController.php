<?php

namespace App\Controller\Admin;

use App\Entity\Workshop;
use App\Service\ExportService;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\EntityFilter;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

class WorkshopCrudController extends ExportableCrudController
{
    const EXPORT_FIELDS = [
        'id',
        'date',
        'duration',
        'attendees',
        'nbParticipants',
        'femaleCount',
        'maleCount',
        'noGenderCount',
        'topics',
        'skills',
        'topicPrecision',
        'participantKinds',
        'ageBreakpoints',
        'usedEquipments',
        'equipmentSuppliers',
        'globalReport',
        'improvementAxis',
        'nbBeneficiariesAccounts',
        'nbStoredDocs',
        'nbCreatedEvents',
        'nbCreatedContacts',
        'nbCreatedNotes',
        'center',
        'author',
        'createdAt',
        'updatedAt'
    ];

    public function __construct(ExportService $exportsService, AdminContextProvider $adminContextProvider, FilterFactory $filterFactory)
    {
        parent::__construct($exportsService, $adminContextProvider, $filterFactory, self::EXPORT_FIELDS);
    }

    public static function getEntityFqcn(): string
    {
        return Workshop::class;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('date')
            ->add('author')
            ->add('participantKinds')
            ->add('topics')
            ->add('ageBreakpoints')
            ->add('equipmentSuppliers')
            ->add('usedEquipments')
            ->add('usedVault')
            ->add('skills')
            ->add('duration')
            ->add(EntityFilter::new('center')->setFormTypeOption('value_type_options.multiple', 'true'));
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->overrideTemplate('crud/index', 'bundles/EasyAdminBundle/Workshop/index.html.twig')
            ->setEntityLabelInSingular('Workshop')
            ->setEntityLabelInPlural('Workshops')
            ->setSearchFields(['id', 'date', 'attendees', 'topics.name', 'skills.name', 'participantKinds.name']);
    }

    public function configureFields(string $pageName): iterable
    {
        $id = IntegerField::new('id', 'ID');
        $date = DateField::new('date');
        $place = TextField::new('place');
        $topicPrecision = TextField::new('topicPrecision');
        $nbParticipants = IntegerField::new('nbParticipants');
        $participantKinds = AssociationField::new('participantKinds');
        $globalReport = TextField::new('globalReport');
        $author = AssociationField::new('author');
        $createdAt = DateTimeField::new('createdAt');
        $updatedAt = DateTimeField::new('updatedAt');
        $center = AssociationField::new('center');
        $topics = AssociationField::new('topics');
        $ageBreakpoints = AssociationField::new('ageBreakpoints');
        $equipmentSuppliers = AssociationField::new('equipmentSuppliers');
        $usedEquipments = AssociationField::new('usedEquipments');
        $nbBeneficiariesAccounts = IntegerField::new('nbBeneficiariesAccounts');
        $nbStoredDocs = IntegerField::new('nbStoredDocs');
        $nbCreatedEvents = IntegerField::new('nbCreatedEvents');
        $nbCreatedContacts = IntegerField::new('nbCreatedContacts');
        $nbCreatedNotes = IntegerField::new('nbCreatedNotes');
        $skills = AssociationField::new('skills');
        $attendees = TextField::new('attendees');
        $improvementAxis = TextField::new('improvementAxis');
        $duration = AssociationField::new('duration');
        $maleCount = IntegerField::new('maleCount')->setRequired(true);
        $femaleCount = IntegerField::new('femaleCount')->setRequired(true);
        $noGenderCount = IntegerField::new('noGenderCount')->setRequired(true);


        if (Crud::PAGE_DETAIL === $pageName) {
            return [
                $id,
                $date,
                $place,
                $duration,
                $attendees,
                $nbParticipants,
                $topics,
                $skills,
                $topicPrecision,
                $participantKinds,
                $ageBreakpoints,
                $usedEquipments,
                $equipmentSuppliers,
                $globalReport,
                $improvementAxis,
                $nbBeneficiariesAccounts,
                $nbStoredDocs,
                $nbCreatedEvents,
                $nbCreatedContacts,
                $nbCreatedNotes,
                $center,
                $author,
                $createdAt,
                $updatedAt
            ];
        } elseif (Crud::PAGE_NEW === $pageName || Crud::PAGE_EDIT === $pageName) {
            return [
                $date,
                $place,
                $duration,
                $attendees,
                $nbParticipants,
                $maleCount,
                $femaleCount,
                $noGenderCount,
                $topics,
                $skills,
                $topicPrecision,
                $participantKinds,
                $ageBreakpoints,
                $usedEquipments,
                $equipmentSuppliers,
                $globalReport,
                $improvementAxis,
                $nbBeneficiariesAccounts,
                $nbStoredDocs,
                $nbCreatedEvents,
                $nbCreatedContacts,
                $nbCreatedNotes,
                $center,
                $author,
                $createdAt,
                $updatedAt
            ];
        }

        return [$id, $date, $attendees, $nbParticipants];
    }
}
