<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractSuperAdminController
{
    public function __construct(private readonly UserService $userService)
    {
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('User')
            ->setEntityLabelInPlural('User')
            ->setSearchFields(['id', 'email', 'roles']);
    }

    public function persistEntity(EntityManagerInterface $entityManager, mixed $entityInstance): void
    {
        $this->userService->updatePassword($entityInstance, $entityInstance->getPlainPassword());
        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, mixed $entityInstance): void
    {
        $this->userService->updatePassword($entityInstance, $entityInstance->getPlainPassword());
        parent::persistEntity($entityManager, $entityInstance);
    }

    public function configureFields(string $pageName): \Generator
    {
        yield TextField::new('email');
        yield TextField::new('plainPassword', 'Password')->onlyOnForms();
        yield AssociationField::new('notes')->onlyOnIndex();
        yield AssociationField::new('workshops')->onlyOnIndex();
        yield IntegerField::new('id', 'ID')->onlyOnDetail();
        yield BooleanField::new('disabled', 'disabled');
        yield ChoiceField::new('roles')
            ->onlyOnForms()
            ->setChoices(array_combine(User::ROLES, User::ROLES))
            ->allowMultipleChoices()
            ->setRequired(false);
    }
}
