<?php

namespace App\Controller\Admin;

use App\Entity\Note;
use App\Service\ExportService;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class NoteCrudController extends ExportableCrudController
{
    const EXPORT_FIELDS = [
        'id',
        'date',
        'hours',
        'nbPros',
        'nbProAccounts',
        'nbBeneficiaries',
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
    private ExportService $exportsService;

    public function __construct(ExportService $exportsService)
    {
        parent::__construct($exportsService, self::EXPORT_FIELDS);
        $this->exportsService = $exportsService;
    }

    public static function getEntityFqcn(): string
    {
        return Note::class;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('id')
            ->add('date')
            ->add('hours')
            ->add('nbPros')
            ->add('nbProAccounts')
            ->add('nbBeneficiaries')
            ->add('nbBeneficiariesAccounts')
            ->add('nbStoredDocs')
            ->add('beneficiariesNotes')
            ->add('proNotes')
            ->add('reconnectNotes')
            ->add('attendees')
            ->add('createdAt')
            ->add('updatedAt')
            ->add('author')
            ->add('center');
    }


    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->overrideTemplate('crud/index', 'bundles/EasyAdminBundle/Note/index.html.twig')
            ->setEntityLabelInSingular('Note')
            ->setEntityLabelInPlural('Note')
            ->setSearchFields(['id', 'hours', 'nbPros', 'nbProAccounts', 'nbBeneficiaries', 'nbBeneficiariesAccounts', 'nbStoredDocs', 'beneficiariesNotes', 'proNotes', 'reconnectNotes', 'attendees']);
    }

    public function configureFields(string $pageName): iterable
    {
        $date = DateField::new('date');
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

        if (Crud::PAGE_DETAIL === $pageName) {
            return [$id, $date, $hours, $nbPros, $nbProAccounts, $nbBeneficiaries, $nbBeneficiariesAccounts, $nbStoredDocs, $beneficiariesNotes, $proNotes, $reconnectNotes, $attendees, $createdAt, $updatedAt, $author, $center];
        } elseif (Crud::PAGE_NEW === $pageName) {
            return [$date, $hours, $nbPros, $nbProAccounts, $nbBeneficiaries, $nbBeneficiariesAccounts, $nbStoredDocs, $beneficiariesNotes, $proNotes, $reconnectNotes, $attendees, $createdAt, $updatedAt, $author, $center];
        } elseif (Crud::PAGE_EDIT === $pageName) {
            return [$date, $hours, $nbPros, $nbProAccounts, $nbBeneficiaries, $nbBeneficiariesAccounts, $nbStoredDocs, $beneficiariesNotes, $proNotes, $reconnectNotes, $attendees, $createdAt, $updatedAt, $author, $center];
        }

        return [$id, $date, $hours, $nbPros, $nbProAccounts, $nbBeneficiaries, $nbBeneficiariesAccounts];
    }
}
