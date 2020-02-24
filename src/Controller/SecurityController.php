<?php


namespace App\Controller;


use App\Repository\UserRepository;
use Firebase\JWT\JWT;
use Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationSuccessHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use function json_decode;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="login", methods={"POST"})
     */
    public function login(Request $request)
    {
        $user = $this->getUser();

        return $this->json([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
        ]);
    }

    /**
     * @Route("/oauth/trigger", name="oauth_trigger", methods={"GET"})
     * @return RedirectResponse
     */
    public function triggerSSO()
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
     * @param Request                      $request
     * @param UserRepository               $userRepository
     * @param AuthenticationSuccessHandler $handler
     * @return RedirectResponse
     */
    public function oauthCheck(Request $request, UserRepository $userRepository, AuthenticationSuccessHandler $handler)
    {
        $token = $request->get('code');
        $key = file_get_contents(dirname(__DIR__).'/../var/oauth/public.key');
        $decodedToken = JWT::decode($token, $key, ['RS256']);
        $tokenArray = (array) $decodedToken;
        $email = $tokenArray['user_id'];
        $user = $userRepository->findOneBy(['email' => $email]);

        $response = $handler->handleAuthenticationSuccess($user);
        $responseData = (array) json_decode($response->getContent());
        $token = $responseData['token'];

        return new RedirectResponse($_ENV['FRONTEND_URL'].'/login?token='.$token);
    }
}