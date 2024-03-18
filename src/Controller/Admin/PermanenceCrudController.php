<?php

namespace App\Controller\Admin;

use App\Entity\CenterTag;
use App\Entity\Permanence;
use App\Filter\AssociationFilter;
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
use EasyCorp\Bundle\EasyAdminBundle\Filter\DateTimeFilter;
use EasyCorp\Bundle\EasyAdminBundle\Filter\EntityFilter;
use EasyCorp\Bundle\EasyAdminBundle\Filter\TextFilter;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class PermanenceCrudController extends ExportableCrudController
{
    final public const EXPORT_FIELDS = [
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
        'nbUninterestedBeneficiaries',
        'nbHelpedBeneficiaries',
        'nbStoredDocs',
        'beneficiariesNotes',
        'proNotes',
        'reconnectNotes',
        'attendees',
        'createdAt',
        'updatedAt',
        'author',
        'center.tags',
        'center',
        'place',
    ];

    public function __construct(
        readonly ExportService $exportsService,
        readonly AdminContextProvider $adminContextProvider,
        readonly FilterFactory $filterFactory
    ) {
        parent::__construct($exportsService, $adminContextProvider, $filterFactory, self::EXPORT_FIELDS);
    }

    public static function getEntityFqcn(): string
    {
        return Permanence::class;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(DateTimeFilter::new('date', 'date'))
            ->add(EntityFilter::new('author', 'author'))
            ->add(TextFilter::new('attendees', 'attendees'))
            ->add(DateTimeFilter::new('createdAt', 'created_at'))
            ->add(DateTimeFilter::new('updatedAt', 'updated_at'))
            ->add(EntityFilter::new('center')->setFormTypeOption('value_type_options.multiple', 'true'))
            ->add(AssociationFilter::new('center.tags.id', 'tags')->setFormType(EntityType::class)->setFormTypeOption('class', CenterTag::class));
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->overrideTemplate('crud/index', 'bundles/EasyAdminBundle/Permanence/index.html.twig')
            ->setEntityLabelInSingular('permanence')
            ->setEntityLabelInPlural('permanences')
            ->setSearchFields(['id', 'hours', 'nbPros', 'nbProAccounts', 'nbBeneficiaries', 'nbBeneficiariesAccounts', 'nbStoredDocs', 'beneficiariesNotes', 'proNotes', 'reconnectNotes', 'attendees']);
    }

    public function configureFields(string $pageName): \Generator
    {
        yield IntegerField::new('id')->hideOnForm()->setColumns(3);
        yield DateField::new('date', 'date')->setColumns(3);
        yield IntegerField::new('hours', 'hours')->setColumns(3);
        yield TextField::new('place', 'place')->onlyOnForms()->setColumns(3);
        yield TextField::new('attendees', 'attendees')->hideOnIndex()->setColumns(3);
        yield AssociationField::new('author', 'author')->hideOnIndex()->setColumns(6);
        yield AssociationField::new('center', 'center')->hideOnIndex()->setColumns(6);
        yield IntegerField::new('nbPros', 'pros_count')->setColumns(3);
        yield IntegerField::new('nbBeneficiaries', 'beneficiaries_count')->setColumns(3);
        yield IntegerField::new('nbBeneficiariesAccounts', 'beneficiaries_accounts_count')->setColumns(3);
        yield IntegerField::new('nbUninterestedBeneficiaries', 'unintested_beneficiaries_count')->setColumns(3);
        yield IntegerField::new('nbHelpedBeneficiaries', 'helped_beneficiaries_count')->setColumns(3);
        yield IntegerField::new('nbStoredDocs', 'stored_docs_count')->setColumns(6)->hideOnIndex();
        yield IntegerField::new('maleCount', 'male_count')->setColumns(3)->setRequired(true);
        yield IntegerField::new('femaleCount', 'female_count')->setColumns(3)->setRequired(true);
        yield IntegerField::new('noGenderCount', 'no_gender_count')->setColumns(3)->setRequired(true)->hideOnIndex();
        yield TextareaField::new('beneficiariesNotes', 'beneficiaries_notes')->hideOnIndex()->setColumns(6);
        yield TextareaField::new('proNotes', 'pro_notes')->hideOnIndex()->setColumns(6);
        yield DateTimeField::new('createdAt', 'created_at')->onlyOnDetail();
        yield DateTimeField::new('updatedAt', 'updated_at')->onlyOnDetail();
    }
}
