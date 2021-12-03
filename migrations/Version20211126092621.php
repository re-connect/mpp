<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211126092621 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE workshop_skill (workshop_id INT NOT NULL, skill_id INT NOT NULL, PRIMARY KEY(workshop_id, skill_id))');
        $this->addSql('CREATE INDEX IDX_B6BFB76D1FDCE57C ON workshop_skill (workshop_id)');
        $this->addSql('CREATE INDEX IDX_B6BFB76D5585C142 ON workshop_skill (skill_id)');
        $this->addSql('ALTER TABLE workshop_skill ADD CONSTRAINT FK_B6BFB76D1FDCE57C FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_skill ADD CONSTRAINT FK_B6BFB76D5585C142 FOREIGN KEY (skill_id) REFERENCES skill (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE workshop_skill');
    }
}
