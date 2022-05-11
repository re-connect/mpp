<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{
    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
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
            ->setSearchFields(['id', 'email', 'roles', 'apiToken']);
    }

    public function persistEntity(EntityManagerInterface $entityManager, $user): void
    {
        $this->userService->updatePassword($user, $user->getPlainPassword());
        $user->setApiToken($user->getEmail());
        parent::persistEntity($entityManager, $user);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $user): void
    {
        $this->userService->updatePassword($user, $user->getPlainPassword());
        parent::persistEntity($entityManager, $user);
    }

    public function configureFields(string $pageName): iterable
    {
        $email = TextField::new('email');
        $password = TextField::new('plainPassword', 'Password');
        $notes = AssociationField::new('notes');
        $id = IntegerField::new('id', 'ID');
        $roles = ChoiceField::new('roles')
            ->setChoices(array_combine(User::ROLES, User::ROLES))
            ->allowMultipleChoices();

        return match ($pageName) {
            Crud::PAGE_INDEX => [$id, $email, $notes],
            Crud::PAGE_DETAIL => [$id, $email, $roles, $password, $notes],
            Crud::PAGE_NEW => [$email, $password, $notes],
            Crud::PAGE_EDIT => [$email, $password, $roles],
        };
    }
}
