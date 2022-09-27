<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserService
{
    public function __construct(private readonly UserPasswordHasherInterface $hasher)
    {
    }

    public function updatePassword(User $user, ?string $password): void
    {
        if ($password) {
            $user->setPassword($this->hasher->hashPassword($user, $password));
        }
    }
}
