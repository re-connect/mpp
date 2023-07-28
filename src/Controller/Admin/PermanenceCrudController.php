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
use EasyCorp\Bundle\EasyAdminBundle\Filter\EntityFilter;
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
            ->add('date')
            ->add('author')
            ->add('attendees')
            ->add('createdAt')
            ->add('updatedAt')
            ->add(EntityFilter::new('center')->setFormTypeOption('value_type_options.multiple', 'true'))
            ->add(AssociationFilter::new('center.tags.id')->setLabel('tags')->setFormType(EntityType::class)->setFormTypeOption('class', CenterTag::class));
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->overrideTemplate('crud/index', 'bundles/EasyAdminBundle/Permanence/index.html.twig')
            ->setEntityLabelInSingular('Permanence')
            ->setEntityLabelInPlural('Permanence')
            ->setSearchFields(['id', 'hours', 'nbPros', 'nbProAccounts', 'nbBeneficiaries', 'nbBeneficiariesAccounts', 'nbStoredDocs', 'beneficiariesNotes', 'proNotes', 'reconnectNotes', 'attendees']);
    }

    public function configureFields(string $pageName): \Generator
    {
        yield IntegerField::new('id')->hideOnForm()->setColumns(3);
        yield DateField::new('date')->setColumns(3);
        yield IntegerField::new('hours')->setColumns(3);
        yield TextField::new('place')->onlyOnForms()->setColumns(3);
        yield TextField::new('attendees')->hideOnIndex()->setColumns(3);
        yield AssociationField::new('author')->hideOnIndex()->setColumns(6);
        yield AssociationField::new('center')->hideOnIndex()->setColumns(6);
        yield IntegerField::new('nbPros')->setColumns(3);
        yield IntegerField::new('nbProAccounts')->setColumns(3);
        yield IntegerField::new('nbBeneficiaries')->setColumns(3);
        yield IntegerField::new('nbBeneficiariesAccounts')->setColumns(3);
        yield IntegerField::new('nbUninterestedBeneficiaries', 'nbUninterestedBeneficiaries')->setColumns(3);
        yield IntegerField::new('nbHelpedBeneficiaries', 'nbHelpedBeneficiaries')->setColumns(3);
        yield IntegerField::new('nbStoredDocs')->setColumns(6)->hideOnIndex();
        yield IntegerField::new('maleCount')->setColumns(3)->setRequired(true)->hideOnIndex();
        yield IntegerField::new('femaleCount')->setColumns(3)->setRequired(true)->hideOnIndex();
        yield IntegerField::new('noGenderCount')->setColumns(3)->setRequired(true)->hideOnIndex();
        yield TextareaField::new('beneficiariesNotes')->hideOnIndex()->setColumns(6);
        yield TextareaField::new('proNotes')->hideOnIndex()->setColumns(6);
        yield TextareaField::new('reconnectNotes')->hideOnIndex()->setColumns(6);
        yield DateTimeField::new('createdAt')->onlyOnDetail();
        yield DateTimeField::new('updatedAt')->onlyOnDetail();
    }
}
