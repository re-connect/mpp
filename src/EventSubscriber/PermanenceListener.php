<?php

namespace App\EventSubscriber;

use App\Entity\Permanence;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\SecurityBundle\Security;

#[AsEntityListener(event: Events::prePersist, method: 'prePersist', entity: Permanence::class)]
#[AsEntityListener(event: Events::postPersist, method: 'postPersist', entity: Permanence::class)]
readonly class PermanenceListener
{
    public function __construct(
        private Security $security,
        private LoggerInterface $logger,
    ) {
    }

    /**
     * @return array<string, string>
     */
    private function getPermanenceLogData(Permanence $permanence): array
    {
        return [
            'centre' => $permanence->getCenter()?->getName(),
            'lieu' => $permanence->getPlace(),
            'date' => $permanence->getCreatedAt()?->format('d/m/Y H:i:s'),
            'auteur' => $permanence->getAuthor()?->getUsername(),
        ];
    }

    public function prePersist(Permanence $permanence): void
    {
        $user = $this->security->getUser();
        if (!$user instanceof User) {
            return;
        }

        $permanence->setAuthor($user);

        $this->logger->info('[Permanence][prePersist] A new Permanence will be persisted', $this->getPermanenceLogData($permanence));
    }

    public function postPersist(Permanence $permanence): void
    {
        $this->logger->info('[Permanence][postPersist] A new Permanence was persisted', $this->getPermanenceLogData($permanence));
    }
}
