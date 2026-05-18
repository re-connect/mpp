<?php

namespace App\EventSubscriber;

use App\Entity\Workshop;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Psr\Log\LoggerInterface;

#[AsEntityListener(event: Events::postPersist, method: 'postPersist', entity: Workshop::class)]
readonly class WorkshopListener
{
    public function __construct(
        private LoggerInterface $logger,
    ) {
    }


    /**
     * @param Workshop $workshop
     * @return array<string, string>
     */
    private function getWorkshopLogData(Workshop $workshop): array
    {
        return [
            'centre' => $workshop->getCenter()->getName(),
            'lieu' => $workshop->getPlace(),
            'date' => $workshop->getCreatedAt()->format('d/m/Y H:i:s'),
            'auteur' => $workshop->getAuthor()->getUsername(),
        ];
    }

    public function postPersist(Workshop $workshop): void
    {
        $this->logger->info('[Workshop][postPersist] A new Workshop was persisted', $this->getWorkshopLogData($workshop));
    }
}
