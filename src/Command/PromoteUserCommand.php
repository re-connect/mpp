<?php

namespace App\Command;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:promote-user',
    description: 'Promotes a user super-admin',
)]
class PromoteUserCommand extends Command
{
    public function __construct(private readonly UserRepository $userRepository, private readonly EntityManagerInterface $em)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('userId', InputArgument::REQUIRED, 'User id');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $userId = $input->getArgument('userId');

        $io->info(sprintf('Finding user with Id: %s', $userId));
        $user = $this->userRepository->find($userId);

        if (!$user) {
            $io->error(sprintf('Did not find user with Id: %s', $userId));

            return self::FAILURE;
        }

        $io->info(sprintf('User %s found for id %d, promoting...', $user->getUsername(), $userId));
        $user->setRoles(['ROLE_SUPER_ADMIN']);
        $this->em->flush();

        $io->success(sprintf('%s has been successfully promoted', $user->getUsername()));

        return Command::SUCCESS;
    }
}
