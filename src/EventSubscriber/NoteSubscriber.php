<?php


namespace App\EventSubscriber;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Note;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Security;

final class NoteSubscriber implements EventSubscriberInterface
{
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['setAuthor', EventPriorities::PRE_WRITE],
        ];
    }

    public function setAuthor(ViewEvent $event)
    {

        $note = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$note instanceof Note || Request::METHOD_POST !== $method) {
            return;
        }
        $user = $this->security->getUser();

        $note->setAuthor($user);
    }
}