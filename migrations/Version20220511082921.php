<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220511082921 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE note ADD male_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE note ADD female_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE note ADD no_gender_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE workshop ADD male_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE workshop ADD female_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE workshop ADD no_gender_count INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE note DROP male_count');
        $this->addSql('ALTER TABLE note DROP female_count');
        $this->addSql('ALTER TABLE note DROP no_gender_count');
        $this->addSql('ALTER TABLE workshop DROP male_count');
        $this->addSql('ALTER TABLE workshop DROP female_count');
        $this->addSql('ALTER TABLE workshop DROP no_gender_count');
    }
}
