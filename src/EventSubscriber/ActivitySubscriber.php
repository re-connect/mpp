<?php

namespace App\EventSubscriber;

use App\Entity\Permanence;
use App\Entity\Workshop;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Symfony\Bundle\SecurityBundle\Security;

#[AsEntityListener(event: Events::prePersist, method: 'setAuthor', entity: Workshop::class)]
final readonly class ActivitySubscriber
{
    public function __construct(private Security $security)
    {
    }

    public function setAuthor(object $activity): void
    {
        if (!$activity instanceof Permanence && !$activity instanceof Workshop) {
            return;
        }

        $activity->setAuthor($this->security->getUser());
    }
}
