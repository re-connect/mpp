<?php

namespace App\Controller\Admin;

use App\Entity\Permanence;
use App\Service\ExportService;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\EntityFilter;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

class NoteCrudController extends ExportableCrudController
{
    const EXPORT_FIELDS = [
        'id',
        'date',
        'hours',
        'nbPros',
        'nbProAccounts',
        'nbBeneficiaries',
        'femaleCount',
        'maleCount',
        'noGenderCount',
        'nbBeneficiariesAccounts',
        'nbStoredDocs',
        'beneficiariesNotes',
        'proNotes',
        'reconnectNotes',
        'attendees',
        'createdAt',
        'updatedAt',
        'author',
        'center',
    ];

    public function __construct(ExportService $exportsService, AdminContextProvider $adminContextProvider, FilterFactory $filterFactory)
    {
        parent::__construct($exportsService, $adminContextProvider, $filterFactory, self::EXPORT_FIELDS);
    }

    public static function getEntityFqcn(): string
    {
        return Permanence::class;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('id')
            ->add('date')
            ->add('author')
            ->add('attendees')
            ->add('createdAt')
            ->add('updatedAt')
            ->add(EntityFilter::new('center')->setFormTypeOption('value_type_options.multiple', 'true'));
    }


    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->overrideTemplate('crud/index', 'bundles/EasyAdminBundle/Permanence/index.html.twig')
            ->setEntityLabelInSingular('Permanence')
            ->setEntityLabelInPlural('Permanence')
            ->setSearchFields(['id', 'hours', 'nbPros', 'nbProAccounts', 'nbBeneficiaries', 'nbBeneficiariesAccounts', 'nbStoredDocs', 'beneficiariesNotes', 'proNotes', 'reconnectNotes', 'attendees']);
    }

    public function configureFields(string $pageName): iterable
    {
        $date = DateField::new('date');
        $place = TextField::new('place');
        $hours = IntegerField::new('hours');
        $nbPros = IntegerField::new('nbPros');
        $nbProAccounts = IntegerField::new('nbProAccounts');
        $nbBeneficiaries = IntegerField::new('nbBeneficiaries');
        $nbBeneficiariesAccounts = IntegerField::new('nbBeneficiariesAccounts');
        $nbStoredDocs = IntegerField::new('nbStoredDocs');
        $beneficiariesNotes = TextareaField::new('beneficiariesNotes');
        $proNotes = TextareaField::new('proNotes');
        $reconnectNotes = TextareaField::new('reconnectNotes');
        $attendees = TextField::new('attendees');
        $createdAt = DateTimeField::new('createdAt');
        $updatedAt = DateTimeField::new('updatedAt');
        $author = AssociationField::new('author');
        $center = AssociationField::new('center');
        $id = IntegerField::new('id');
        $maleCount = IntegerField::new('maleCount')->setRequired(true);
        $femaleCount = IntegerField::new('femaleCount')->setRequired(true);
        $noGenderCount = IntegerField::new('noGenderCount')->setRequired(true);

        if (Crud::PAGE_DETAIL === $pageName) {
            return [
                $id,
                $date,
                $hours,
                $nbPros,
                $nbProAccounts,
                $nbBeneficiaries,
                $nbBeneficiariesAccounts,
                $nbStoredDocs,
                $beneficiariesNotes,
                $proNotes,
                $reconnectNotes,
                $attendees,
                $createdAt,
                $updatedAt,
                $author,
                $center
            ];
        } elseif (Crud::PAGE_NEW === $pageName) {
            return [
                $date,
                $place,
                $hours,
                $maleCount,
                $femaleCount,
                $noGenderCount,
                $nbPros,
                $nbProAccounts,
                $nbBeneficiaries,
                $nbBeneficiariesAccounts,
                $nbStoredDocs,
                $beneficiariesNotes,
                $proNotes,
                $reconnectNotes,
                $attendees,
                $createdAt,
                $updatedAt,
                $author,
                $center
            ];
        } elseif (Crud::PAGE_EDIT === $pageName) {
            return [
                $date,
                $place,
                $hours,
                $maleCount,
                $femaleCount,
                $noGenderCount,
                $nbPros,
                $nbProAccounts,
                $nbBeneficiaries,
                $nbBeneficiariesAccounts,
                $nbStoredDocs,
                $beneficiariesNotes,
                $proNotes,
                $reconnectNotes,
                $attendees,
                $createdAt,
                $updatedAt,
                $author,
                $center
            ];
        }

        return [$id, $date, $hours, $nbPros, $nbProAccounts, $nbBeneficiaries, $nbBeneficiariesAccounts];
    }
}
