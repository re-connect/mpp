<?php


namespace App\Controller;


use App\Entity\User;
use App\Repository\UserRepository;
use App\Security\LoginFormAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Firebase\JWT\JWT;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationSuccessHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use function in_array;
use function json_decode;

class SecurityController extends AbstractController
{
    /**
     * @Route("/admin_login", name="admin_login", methods={"GET"})
     */
    public function adminLogin(Request $request, JWTEncoderInterface $encoder, EntityManagerInterface $em, GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $authenticator): Response
    {
        $token = $request->get('token');
        if ($token === null) throw $this->createAccessDeniedException();
        try {
            $credentials = $encoder->decode($token);
            if ($credentials === false || $credentials === null) throw $this->createAccessDeniedException();
            $username = $credentials['username'];
            if ($username === null) throw $this->createAccessDeniedException();
            $user = $em->getRepository(User::class)->findOneBy(['email' => $username]);
            if ($user === null) throw $this->createAccessDeniedException();
            if (!in_array('ROLE_ADMIN', $user->getRoles())) throw $this->createAccessDeniedException();

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main'
            );
        } catch (Exception $exception) {
            dd($exception);
            throw $this->createAccessDeniedException();
        }
    }

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