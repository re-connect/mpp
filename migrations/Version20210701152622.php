<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210701152622 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE center_tag_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE center_tag (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE center_tag_center (center_tag_id INT NOT NULL, center_id INT NOT NULL, PRIMARY KEY(center_tag_id, center_id))');
        $this->addSql('CREATE INDEX IDX_8CD659D4D7B07A3C ON center_tag_center (center_tag_id)');
        $this->addSql('CREATE INDEX IDX_8CD659D45932F377 ON center_tag_center (center_id)');
        $this->addSql('ALTER TABLE center_tag_center ADD CONSTRAINT FK_8CD659D4D7B07A3C FOREIGN KEY (center_tag_id) REFERENCES center_tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE center_tag_center ADD CONSTRAINT FK_8CD659D45932F377 FOREIGN KEY (center_id) REFERENCES center (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE center ADD association VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE center_tag_center DROP CONSTRAINT FK_8CD659D4D7B07A3C');
        $this->addSql('DROP SEQUENCE center_tag_id_seq CASCADE');
        $this->addSql('DROP TABLE center_tag');
        $this->addSql('DROP TABLE center_tag_center');
        $this->addSql('ALTER TABLE center DROP association');
    }
}
