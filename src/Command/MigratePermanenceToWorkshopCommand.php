<?php

namespace App\Command;

use App\Entity\Center;
use App\Entity\Duration;
use App\Entity\Workshop;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class MigratePermanenceToWorkshopCommand extends Command
{
    protected static $defaultName = 'app:migrate-permanences-to-workshops';
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em, string $name = null)
    {
        parent::__construct($name);
        $this->em = $em;
    }

    protected function configure(): void
    {
        $this
            ->setDescription('Migrates all permanences from a center into workshops')
            ->addArgument('center Id', InputArgument::REQUIRED, 'The id of the center which contains permanences to migrate ');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Migrate Permanences into Workshops');
        $centerId = $input->getArgument('center Id');

        $center = $this->em->getRepository(Center::class)->find($centerId);
        $durationRepository = $this->em->getRepository(Duration::class);
        $allDurations = $durationRepository->findAll();
        $defaultDuration = $durationRepository->findOneBy(['name' => 120]);

        if (null === $center) {
            $io->error(sprintf('No center found for id %s', $centerId));

            return Command::FAILURE;
        }

        if ($io->confirm(sprintf('Are you sure you want to migrate permanences from center : %s', $center->getName()))) {
            foreach ($center->getNotes() as $permanence) {
                $workshop = new Workshop();
                $workshop->setCenter($center)
                    ->setAuthor($permanence->getAuthor())
                    ->setDate($permanence->getDate())
                    ->setNbParticipants($permanence->getNbBeneficiaries())
                    ->setGlobalReport($permanence->getBeneficiariesNotes())
                    ->setNbBeneficiariesAccounts($permanence->getNbBeneficiariesAccounts())
                    ->setAttendees('' === $permanence->getAttendees()
                        ? $permanence->getAuthor()->getEmail()
                        : $permanence->getAttendees())
                    ->setDuration($this->findWorkshopDuration($allDurations, $permanence->getHours(), $defaultDuration))
                    ->setNbBeneficiariesAccounts($permanence->getNbBeneficiariesAccounts())
                    ->setNbStoredDocs($permanence->getNbStoredDocs())
                    ->setNbCreatedEvents(0)
                    ->setNbCreatedContacts(0)
                    ->setNbCreatedNotes(0)
                    ->setCreatedAt($permanence->getCreatedAt())
                    ->setUpdatedAt($permanence->getUpdatedAt());

                if ($permanence->getNbBeneficiariesAccounts() > 0 || $permanence->getNbStoredDocs() > 0) {
                    $workshop->setUsedVault(true);
                }

                $this->em->persist($workshop);
                $center->setPermanence(false)
                    ->setWorkshop(true);
                $this->em->remove($permanence);
            }
            $this->em->flush();
            $io->success('Migration executed');
        }

        return Command::SUCCESS;
    }

    private function findWorkshopDuration(array $allDurations, int $permDuration, Duration $defaultDuration): Duration
    {
        foreach ($allDurations as $duration) {
            if ($duration->getName() === ($permDuration * 60)) {
                return $duration;
            }
        }

        return $defaultDuration;
    }
}
