<?php

namespace App\Tests;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AuthenticatedTestCase extends WebTestCase
{
    public function login(KernelBrowser $client, string $email): void
    {
        $userRepository = static::getContainer()->get(UserRepository::class);
        $user = $userRepository->findOneBy(['email' => $email]);

        $user ? $client->loginUser($user) : $this->fail(sprintf('User with email %s not found', $email));
    }
}
