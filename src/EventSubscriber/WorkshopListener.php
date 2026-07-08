<?php

namespace App\EventSubscriber;

use App\Entity\User;
use App\Entity\Workshop;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\SecurityBundle\Security;

#[AsEntityListener(event: Events::prePersist, method: 'prePersist', entity: Workshop::class)]
#[AsEntityListener(event: Events::postPersist, method: 'postPersist', entity: Workshop::class)]
readonly class WorkshopListener
{
    public function __construct(
        private Security $security,
        private LoggerInterface $logger,
    ) {
    }

    /**
     * @return array<string, string>
     */
    private function getWorkshopLogData(Workshop $workshop): array
    {
        return [
            'centre' => $workshop->getCenter()?->getName(),
            'lieu' => $workshop->getPlace(),
            'date' => $workshop->getCreatedAt()?->format('d/m/Y H:i:s'),
            'auteur' => $workshop->getAuthor()?->getUsername(),
        ];
    }

    public function prePersist(Workshop $workshop): void
    {
        $user = $this->security->getUser();
        if (!$user instanceof User) {
            return;
        }

        $workshop->setAuthor($user);

        $this->logger->info('[Workshop][prePersist] A new Workshop will be persisted', $this->getWorkshopLogData($workshop));
    }

    public function postPersist(Workshop $workshop): void
    {
        $this->logger->info('[Workshop][postPersist] A new Workshop was persisted', $this->getWorkshopLogData($workshop));
    }
}
