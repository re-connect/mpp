<?php

namespace App\Command;

use App\Entity\Duration;
use App\Entity\Workshop;
use App\Repository\CenterRepository;
use App\Repository\DurationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class MigratePermanenceToWorkshopCommand extends Command
{
    protected static $defaultName = 'app:migrate-permanences-to-workshops';

    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly DurationRepository $durationRepository,
        private readonly CenterRepository $centerRepository,
        string $name = null
    ) {
        parent::__construct($name);
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

        $center = $this->centerRepository->find($centerId);
        $allDurations = $this->durationRepository->findAll();
        $defaultDuration = $this->durationRepository->findOneBy(['name' => 120]);

        if (null === $center) {
            $io->error(sprintf('No center found for id %s', $centerId));

            return Command::FAILURE;
        }

        if ($io->confirm(sprintf('Are you sure you want to migrate permanences from center : %s', $center->getName()))) {
            foreach ($center->getNotes() as $permanence) {
                $workshop = new Workshop();
                $globalReport = sprintf("%s \n\n", $permanence->getBeneficiariesNotes());

                if (!empty($permanence->getProNotes())) {
                    $globalReport .= sprintf("%s \n\n", $permanence->getProNotes());
                }

                if (!empty($permanence->getReconnectNotes())) {
                    $globalReport .= sprintf("%s \n\n", $permanence->getReconnectNotes());
                }

                if (!empty($permanence->getPlace())) {
                    $globalReport .= sprintf("Lieu : %s \n", $permanence->getPlace());
                }

                if (0 < $permanence->getNbPros()) {
                    $globalReport .= sprintf("Nb pros rencontrés : %s \n", $permanence->getNbPros());
                }

                if (0 < $permanence->getNbProAccounts()) {
                    $globalReport .= sprintf("Nb comptes pro : %s \n", $permanence->getNbProAccounts());
                }

                $workshop->setCenter($center)
                    ->setAuthor($permanence->getAuthor())
                    ->setDate($permanence->getDate())
                    ->setNbParticipants($permanence->getNbBeneficiaries())
                    ->setGlobalReport($globalReport)
                    ->setNbBeneficiariesAccounts($permanence->getNbBeneficiariesAccounts())
                    ->setAttendees((null === $permanence->getAttendees() || '' === $permanence->getAttendees())
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
