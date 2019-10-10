<?php


namespace App\Command;


use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class CreateUserCommand extends Command
{

    protected static $defaultName = 'app:create-user';
    private $passwordEncoder;
    private $om;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, ObjectManager $om, string $name = null)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->om = $om;
        parent::__construct($name);
    }

    protected function configure()
    {
        $this
            ->setDescription('Creates a new user.')
            ->setHelp('This command allows you to create a user')
            ->addArgument('email', InputArgument::REQUIRED, 'User email')
            ->addArgument('password', InputArgument::REQUIRED, 'User password');

    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        $output->writeln('You are about to create a user.');

        $user = new User();
        $user->setApiToken($email);
        $user->setEmail($email);
        $user->setPassword($this->passwordEncoder->encodePassword($user, $password));

        $this->om->persist($user);
        $this->om->flush();
        $output->writeln('Done');
    }
}