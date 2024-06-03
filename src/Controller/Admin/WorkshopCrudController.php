<?php

namespace App\Controller\Admin;

use App\Entity\CenterTag;
use App\Entity\Workshop;
use App\Filter\AssociationFilter;
use App\Service\ExportService;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\BooleanFilter;
use EasyCorp\Bundle\EasyAdminBundle\Filter\DateTimeFilter;
use EasyCorp\Bundle\EasyAdminBundle\Filter\EntityFilter;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class WorkshopCrudController extends ExportableCrudController
{
    final public const EXPORT_FIELDS = [
        'id',
        'date',
        'duration',
        'attendees',
        'nbParticipants',
        'nbNewParticipants',
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
        'updateProposal',
        'addProposal',
        'nbBeneficiariesAccounts',
        'nbStoredDocs',
        'nbCreatedEvents',
        'nbCreatedContacts',
        'nbCreatedNotes',
        'center.tags',
        'center',
        'author',
        'createdAt',
        'updatedAt',
        'place',
    ];

    public function __construct(ExportService $exportsService, AdminContextProvider $adminContextProvider, FilterFactory $filterFactory)
    {
        parent::__construct($exportsService, $adminContextProvider, $filterFactory, self::EXPORT_FIELDS);
    }

    public static function getEntityFqcn(): string
    {
        return Workshop::class;
    }

    /**
     * @throws \Exception
     */
    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(DateTimeFilter::new('date', 'date'))
            ->add(EntityFilter::new('author', 'author'))
            ->add(EntityFilter::new('participantKinds', 'participant_kinds'))
            ->add(EntityFilter::new('topics', 'topics'))
            ->add(EntityFilter::new('ageBreakpoints', 'age_breakpoints'))
            ->add(EntityFilter::new('equipmentSuppliers', 'equipment_supplier'))
            ->add(EntityFilter::new('usedEquipments', 'used_equipments'))
            ->add(BooleanFilter::new('usedVault', 'has_used_vault'))
            ->add(EntityFilter::new('skills', 'skills'))
            ->add(EntityFilter::new('duration', 'duration'))
            ->add(EntityFilter::new('center', 'center')->setFormTypeOption('value_type_options.multiple', 'true'))
            ->add(AssociationFilter::new('center.tags.id', 'tags')->setFormType(EntityType::class)->setFormTypeOption('class', CenterTag::class));
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->overrideTemplate('crud/index', 'bundles/EasyAdminBundle/Workshop/index.html.twig')
            ->setEntityLabelInSingular('workshop')
            ->setEntityLabelInPlural('workshops')
            ->setSearchFields(['id', 'date', 'attendees', 'topics.name', 'skills.name', 'participantKinds.name']);
    }

    public function configureFields(string $pageName): iterable
    {
        $id = IntegerField::new('id', 'ID');
        $date = DateField::new('date', 'date');
        $place = TextField::new('place', 'place');
        $topicPrecision = TextField::new('topicPrecision', 'topic_precision');
        $nbParticipants = IntegerField::new('nbParticipants', 'attendees_count');
        $participantKinds = AssociationField::new('participantKinds', 'participant_kinds');
        $author = AssociationField::new('author', 'author');
        $createdAt = DateTimeField::new('createdAt', 'created_at');
        $updatedAt = DateTimeField::new('updatedAt', 'updated_at');
        $center = AssociationField::new('center', 'center');
        $topics = AssociationField::new('topics', 'topic');
        $ageBreakpoints = AssociationField::new('ageBreakpoints', 'age_breakpoints');
        $equipmentSuppliers = AssociationField::new('equipmentSuppliers', 'equipment_supplier');
        $usedEquipments = AssociationField::new('usedEquipments', 'used_equipments');
        $nbBeneficiariesAccounts = IntegerField::new('nbBeneficiariesAccounts', 'beneficiaries_accounts_count');
        $nbStoredDocs = IntegerField::new('nbStoredDocs', 'stored_docs_count');
        $nbCreatedEvents = IntegerField::new('nbCreatedEvents', 'created_events_count');
        $nbCreatedContacts = IntegerField::new('nbCreatedContacts', 'created_contacts_count');
        $nbCreatedNotes = IntegerField::new('nbCreatedNotes', 'created_notes_count');
        $skills = AssociationField::new('skills', 'skills');
        $attendees = TextField::new('attendees', 'attendees');
        $globalReport = TextField::new('globalReport', 'global_report');
        $addProposal = TextField::new('addProposal', 'add_proposal');
        $updateProposal = TextField::new('updateProposal', 'update_proposal');
        $duration = AssociationField::new('duration', 'duration');
        $maleCount = IntegerField::new('maleCount', 'male_count')->setRequired(true);
        $femaleCount = IntegerField::new('femaleCount', 'female_count')->setRequired(true);
        $noGenderCount = IntegerField::new('noGenderCount', 'no_gender_count')->setRequired(true);

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
                $addProposal,
                $updateProposal,
                $nbBeneficiariesAccounts,
                $nbStoredDocs,
                $nbCreatedEvents,
                $nbCreatedContacts,
                $nbCreatedNotes,
                $center,
                $author,
                $createdAt,
                $updatedAt,
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
                $addProposal,
                $updateProposal,
                $nbBeneficiariesAccounts,
                $nbStoredDocs,
                $nbCreatedEvents,
                $nbCreatedContacts,
                $nbCreatedNotes,
                $center,
                $author,
                $createdAt,
                $updatedAt,
            ];
        }

        return [$id, $date, $attendees, $nbParticipants];
    }
}
