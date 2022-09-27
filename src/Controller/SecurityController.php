<?php

namespace App\Controller;

use App\Service\SecurityService;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\OAuth2Client;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @throws \Exception
     */
    #[Route(path: '/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): never
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

    #[Route(path: '/', name: 'home', methods: ['GET'])]
    public function home(): RedirectResponse
    {
        return $this->redirectToRoute('login');
    }

    #[Route(path: '/login', name: 'login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    #[Route(path: '/reconnect-pro-login-trigger', name: 'reconnect_pro_login_trigger', methods: ['GET'])]
    public function reconnectProLoginTrigger(OAuth2Client $client): mixed
    {
        return $client->getOAuth2Provider()->authorize();
    }

    #[Route(path: '/reconnect-pro-login-check', name: 'reconnect_pro_login_check', methods: ['GET'])]
    public function reconnectProLoginCheck(Request $request, SecurityService $service): Response
    {
        return $service->authenticateUserFromReconnectPro($request);
    }

    #[Route(path: '/google-login-trigger', name: 'google_login_trigger', methods: ['GET'])]
    public function googleLoginTrigger(ClientRegistry $clientRegistry): RedirectResponse
    {
        return $clientRegistry
            ->getClient('google')
            ->redirect([], []);
    }

    #[Route(path: '/google-check', name: 'google_login_check', methods: ['GET'])]
    public function googleLoginCheck(Request $request, SecurityService $service): Response
    {
        return $service->authenticateUserFromGoogle($request);
    }

    #[Route(path: '/user-disabled', name: 'user_disabled', methods: ['GET'])]
    public function userDisabled(): Response
    {
        return $this->render('security/user_disabled.html.twig');
    }
}
