<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\SecurityRequestAttributes;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

class LoginFormAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    public function __construct(private readonly RouterInterface $router)
    {
    }

    public function authenticate(Request $request): Passport
    {
        try {
            $credentials = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);

            $email = $credentials ? $credentials['email'] : $request->request->get('email');
            $password = $credentials ? $credentials['password'] : $request->request->get('password');
            $request->getSession()->set(SecurityRequestAttributes::LAST_USERNAME, $email);

            return new Passport(new UserBadge($email), new PasswordCredentials($password));
        } catch (\JsonException) {
            throw new AuthenticationException();
        }
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): Response
    {
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        return new RedirectResponse($this->router->generate('app_admin_dashboard_index'));
    }

    protected function getLoginUrl(Request $request): string
    {
        return $this->router->generate('login');
    }
}
