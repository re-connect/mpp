<?php


namespace App\Controller;


use App\Repository\UserRepository;
use Firebase\JWT\JWT;
use Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationSuccessHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(): Response
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function home(): RedirectResponse
    {
        return $this->redirectToRoute('login');
    }

    /**
     * @Route("/login", name="login", methods={"GET", "POST"})
     */
    public function login(Request $request, AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/oauth/trigger", name="oauth_trigger", methods={"GET"})
     */
    public function triggerSSO(): RedirectResponse
    {
        $ssoUrl = sprintf(
            '%s?response_type=code&client_id=%s&redirect_uri=%s',
            $_ENV['SSO_AUTH_ENDPOINT'],
            $_ENV['SSO_CLIENT_ID'],
            $_ENV['SSO_REDIRECT_URI']
        );

        return new RedirectResponse($ssoUrl);
    }

    /**
     * @Route("/oauth/check", name="oauth_check", methods={"GET"})
     */
    public function oauthCheck(Request $request, UserRepository $userRepository, AuthenticationSuccessHandler $handler): RedirectResponse
    {
        $token = $request->query->get('code');
        $key = file_get_contents(dirname(__DIR__).'/../var/oauth/public.key');
        $decodedToken = JWT::decode($token, $key, ['RS256']);
        $tokenArray = (array) $decodedToken;
        $email = $tokenArray['user_id'];
        $user = $userRepository->findOneBy(['email' => $email]);

        if (null === $user) {
            return new RedirectResponse($_ENV['FRONTEND_URL']);
        }
        $response = $handler->handleAuthenticationSuccess($user);
        $responseData = (array) json_decode($response->getContent());
        $token = $responseData['token'];

        return new RedirectResponse($_ENV['FRONTEND_URL'].'/login?token='.$token);
    }
}