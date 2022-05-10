<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220510130958 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE note ADD nb_male_gender INT DEFAULT NULL');
        $this->addSql('ALTER TABLE note ADD nb_female_gender INT DEFAULT NULL');
        $this->addSql('ALTER TABLE note ADD nb_other_gender INT DEFAULT NULL');
        $this->addSql('ALTER TABLE workshop ADD nb_male_gender INT DEFAULT NULL');
        $this->addSql('ALTER TABLE workshop ADD nb_female_gender INT DEFAULT NULL');
        $this->addSql('ALTER TABLE workshop ADD nb_other_gender INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE note DROP nb_male_gender');
        $this->addSql('ALTER TABLE note DROP nb_female_gender');
        $this->addSql('ALTER TABLE note DROP nb_other_gender');
        $this->addSql('ALTER TABLE workshop DROP nb_male_gender');
        $this->addSql('ALTER TABLE workshop DROP nb_female_gender');
        $this->addSql('ALTER TABLE workshop DROP nb_other_gender');
    }
}
