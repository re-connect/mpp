<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Security\LoginFormAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\OAuth2Client;
use KnpU\OAuth2ClientBundle\Client\Provider\GoogleClient;
use League\OAuth2\Client\Provider\GoogleUser;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

class SecurityService
{
    public function __construct(
        private readonly OAuth2Client $client,
        private readonly UserAuthenticatorInterface $authenticator,
        private readonly LoginFormAuthenticator $formLoginAuthenticator,
        private readonly UserRepository $repository,
        private readonly EntityManagerInterface $em,
        private readonly RouterInterface $router,
        private readonly ClientRegistry $registry,
        private readonly string $reconnectProJwtPublicKey,
        private readonly string $frontendUrl,
    ) {
    }

    public function authenticateUserFromReconnectPro(Request $request): RedirectResponse
    {
        try {
            $token = $this->client->getAccessToken();
        } catch (\Exception) {
            return new RedirectResponse($this->frontendUrl);
        }

        $key = file_get_contents($this->reconnectProJwtPublicKey);
        if (!$key) {
            throw new \Exception(sprintf('Could not find key at path %s', $this->reconnectProJwtPublicKey));
        }

        JWT::$leeway = 60;
        $decoded = (array) JWT::decode($token->getToken(), new Key($key, 'RS256'));
        $email = $decoded['sub'] ?? null;

        return $this->authenticateOrCreateUser((string) $email, $request);
    }

    public function authenticateUserFromGoogle(Request $request): RedirectResponse
    {
        try {
            /** @var GoogleClient $client */
            $client = $this->registry->getClient('google');
            /** @var GoogleUser $user */
            $user = $client->fetchUser();

            return $this->authenticateOrCreateUser($user->getEmail(), $request);
        } catch (\Exception) {
            throw new AccessDeniedException();
        }
    }

    private function authenticateOrCreateUser(string $email, Request $request): RedirectResponse
    {
        if ($email) {
            $user = $this->repository->findOneBy(['email' => $email]);
            if (!$user && str_ends_with($email, '@reconnect.fr')) {
                $user = (new User())->setEmail($email)->setPassword('')->addRole('ROLE_USER');
                $this->em->persist($user);
                $this->em->flush();
            } elseif ($user->isDisabled()) {
                return new RedirectResponse($this->router->generate('user_disabled'));
            }

            $this->authenticator->authenticateUser($user, $this->formLoginAuthenticator, $request);
        }

        return new RedirectResponse($this->frontendUrl);
    }
}
