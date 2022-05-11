<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserService
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function updatePassword(User $user, ?string $password): void
    {
        if ($password) {
            $user->setPassword($this->hasher->hashPassword($user, $password));
        }
    }
}
