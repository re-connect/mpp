<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    final public const PASSWORD_HASH = '$2y$13$te1UUDYPXELYC9jcVmil0.XQcmPValnWUN10VqDAJsh5zpnkiT9fm'; // = 'StrongPassword1!'
    final public const ADMIN_USER_MAIL = 'admin_user@mail.com';
    final public const SUPER_ADMIN_USER_MAIL = 'super_admin_user@mail.com';

    public function load(ObjectManager $manager): void
    {
        $manager->persist($this->createUser(self::ADMIN_USER_MAIL, ['ROLE_ADMIN']));
        $manager->persist($this->createUser(self::SUPER_ADMIN_USER_MAIL, ['ROLE_SUPER_ADMIN']));

        $manager->flush();
    }

    /**
     * @param string[] $roles
     */
    private function createUser(string $email, array $roles): User
    {
        return (new User())->setEmail($email)->setRoles($roles)->setPassword(self::PASSWORD_HASH);
    }
}
