<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Security\LoginFormAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use KnpU\OAuth2ClientBundle\Client\OAuth2Client;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

class SecurityService
{
    public function __construct(
        private readonly OAuth2Client               $client,
        private readonly UserAuthenticatorInterface $authenticator,
        private readonly LoginFormAuthenticator     $formLoginAuthenticator,
        private readonly UserRepository             $repository,
        private readonly EntityManagerInterface     $em,
        private readonly string                     $reconnectProJwtPublicKey,
        private readonly string                     $frontendUrl,
    ) {
    }

    /**
     * @throws \Exception
     */
    public function authenticateUserFromReconnectPro(Request $request): string
    {
        try {
            $token = $this->client->getAccessToken();
        } catch (\Exception) {
            return $this->frontendUrl;
        }

        $key = file_get_contents($this->reconnectProJwtPublicKey);
        if (!$key) {
            throw new \Exception(sprintf('Could not find key at path %s', $this->reconnectProJwtPublicKey));
        }

        JWT::$leeway = 60;
        $decoded = (array) JWT::decode($token->getToken(), new Key($key, 'RS256'));
        $email = $decoded['sub'] ?? null;

        if ($email) {
            $user = $this->repository->findOneBy(['email' => $email]);
            if (!$user && str_ends_with((string) $email, '@reconnect.fr')) {
                $user = (new User())
                    ->setEmail($email)
                    ->setPassword('');
                $this->em->persist($user);
                $this->em->flush();
            }
            $this->authenticator->authenticateUser($user, $this->formLoginAuthenticator, $request);
        }

        return $this->frontendUrl;
    }
}
