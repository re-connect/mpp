<?php

namespace App\EventSubscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\Permanence;
use App\Entity\Workshop;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

final class ActivitySubscriber implements EventSubscriberInterface
{
    public function __construct(private readonly Security $security)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => ['setAuthor', EventPriorities::PRE_WRITE],
        ];
    }

    public function setAuthor(ViewEvent $event): void
    {
        $activity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ((!$activity instanceof Permanence && !$activity instanceof Workshop) || Request::METHOD_POST !== $method) {
            return;
        }
        $user = $this->security->getUser();

        $activity->setAuthor($user);
    }
}
