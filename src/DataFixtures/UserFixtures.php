<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setEmail('georges.moustaki@gmail.com');
        $user->setApiToken('georges.moustaki@gmail.com');
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'moustaki'
        ));
        $manager->persist($user);
        $manager->flush();
    }
}
