<?php


namespace App\Handler;


use App\Repository\UserRepository;
use Exception;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationFailureEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Events;
use Lexik\Bundle\JWTAuthenticationBundle\Response\JWTAuthenticationFailureResponse;
use Lexik\Bundle\JWTAuthenticationBundle\Response\JWTAuthenticationSuccessResponse;
use Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationFailureHandler;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface as ContractsEventDispatcherInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use function json_decode;

class AuthenticationFailHandler extends AuthenticationFailureHandler
{
    protected $dispatcher;
    protected $jwtManager;
    protected $userRepository;


    /**
     * @param JWTTokenManagerInterface $jwtManager
     * @param EventDispatcherInterface $dispatcher
     * @param UserRepository           $userRepository
     */
    public function __construct(JWTTokenManagerInterface $jwtManager, EventDispatcherInterface $dispatcher, UserRepository $userRepository)
    {
        $this->jwtManager = $jwtManager;
        $this->userRepository = $userRepository;
        parent::__construct($dispatcher);
    }

    /**
     * {@inheritdoc}
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $credentials = json_decode($request->getContent(), true);

        try {
            $httpClient = HttpClient::create();
            $response = $httpClient->request('POST', $_ENV['SSO_TOKEN_ENDPOINT'], [
                'body' => [
                    "grant_type" => "password",
                    "client_id" => $_ENV['SSO_CLIENT_ID'],
                    "client_secret" => $_ENV['SSO_CLIENT_SECRET'],
                    "username" => $credentials['email'],
                    "password" => $credentials['password'],
                ],
            ]);
            if ($response->getStatusCode() === 200) {
                $user = $this->userRepository->findOneBy(['email' => $credentials['email']]);
                $jwt = $this->jwtManager->create($user);
                $response = new JWTAuthenticationSuccessResponse($jwt);
                $event = new AuthenticationSuccessEvent(['token' => $jwt], $user, $response);

                if ($this->dispatcher instanceof ContractsEventDispatcherInterface) {
                    $this->dispatcher->dispatch($event, Events::AUTHENTICATION_SUCCESS);
                } else {
                    $this->dispatcher->dispatch(Events::AUTHENTICATION_SUCCESS, $event);
                }
                $response->setData($event->getData());

                return $response;

            } else {
                $event = new AuthenticationFailureEvent(
                    $exception,
                    new JWTAuthenticationFailureResponse($exception->getMessage())
                );
                if ($this->dispatcher instanceof ContractsEventDispatcherInterface) {
                    $this->dispatcher->dispatch($event, Events::AUTHENTICATION_FAILURE);
                } else {
                    $this->dispatcher->dispatch(Events::AUTHENTICATION_FAILURE, $event);
                }

                return $event->getResponse();
            }
        } catch (Exception $exception) {
            return false;
        } catch (TransportExceptionInterface $exception) {
            return false;
        }
    }
}