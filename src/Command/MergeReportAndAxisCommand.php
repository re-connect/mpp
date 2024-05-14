<?php

namespace App\Command;

use App\Entity\Workshop;
use App\Repository\WorkshopRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:merge-report-and-axis',
    description: 'Merge global report and improvement axis into a single column',
)]
class MergeReportAndAxisCommand extends Command
{
    public function __construct(private readonly WorkshopRepository $repository, private readonly EntityManagerInterface $em)
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->note('Starting merge of report and axis');

        /** @var Workshop[] $workshopsWithReport */
        $workshopsWithReport = $this->repository->createQueryBuilder('w')
            ->where('w.globalReport IS NOT NULL')
            ->getQuery()
            ->getResult();

        foreach ($workshopsWithReport as $workshop) {
            $workshop->setGlobalReport($workshop->getImprovementAxis()
                ? sprintf('%s ; %s', $workshop->getGlobalReport(), $workshop->getImprovementAxis())
                : $workshop->getGlobalReport()
            );
        }
        $io->note('Done with the merge, flushing changes');

        $this->em->flush();

        $io->success('Done');

        return Command::SUCCESS;
    }
}
