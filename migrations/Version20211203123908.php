<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211203123908 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE duration_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE duration (id INT NOT NULL, name INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE workshop ADD duration_id INT NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD attendees VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD improvement_axis VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT FK_9B6F02C437B987D8 FOREIGN KEY (duration_id) REFERENCES duration (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_9B6F02C437B987D8 ON workshop (duration_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE workshop DROP CONSTRAINT FK_9B6F02C437B987D8');
        $this->addSql('DROP SEQUENCE duration_id_seq CASCADE');
        $this->addSql('DROP TABLE duration');
        $this->addSql('DROP INDEX IDX_9B6F02C437B987D8');
        $this->addSql('ALTER TABLE workshop DROP duration_id');
        $this->addSql('ALTER TABLE workshop DROP attendees');
        $this->addSql('ALTER TABLE workshop DROP improvement_axis');
    }
}
