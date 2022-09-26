<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191009081646 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf('postgresql' !== $this->connection->getDatabasePlatform()->getName(), 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE note ADD hours INT NOT NULL');
        $this->addSql('ALTER TABLE note ADD nb_pros INT NOT NULL');
        $this->addSql('ALTER TABLE note ADD nb_pro_accounts INT NOT NULL');
        $this->addSql('ALTER TABLE note ADD nb_beneficiaries INT NOT NULL');
        $this->addSql('ALTER TABLE note ADD nb_beneficiaries_accounts INT NOT NULL');
        $this->addSql('ALTER TABLE note ADD nb_stored_docs INT NOT NULL');
        $this->addSql('ALTER TABLE note ADD pro_notes TEXT NOT NULL');
        $this->addSql('ALTER TABLE note ADD reconnect_notes TEXT NOT NULL');
        $this->addSql('ALTER TABLE note DROP title');
        $this->addSql('ALTER TABLE note RENAME COLUMN content TO beneficiaries_notes');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf('postgresql' !== $this->connection->getDatabasePlatform()->getName(), 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE note ADD content TEXT NOT NULL');
        $this->addSql('ALTER TABLE note ADD title VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE note DROP hours');
        $this->addSql('ALTER TABLE note DROP nb_pros');
        $this->addSql('ALTER TABLE note DROP nb_pro_accounts');
        $this->addSql('ALTER TABLE note DROP nb_beneficiaries');
        $this->addSql('ALTER TABLE note DROP nb_beneficiaries_accounts');
        $this->addSql('ALTER TABLE note DROP nb_stored_docs');
        $this->addSql('ALTER TABLE note DROP beneficiaries_notes');
        $this->addSql('ALTER TABLE note DROP pro_notes');
        $this->addSql('ALTER TABLE note DROP reconnect_notes');
    }
}
