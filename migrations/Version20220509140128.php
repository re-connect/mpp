<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220509140128 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE gender_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE gender (id INT NOT NULL, name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE permanence_gender (permanence_id INT NOT NULL, gender_id INT NOT NULL, PRIMARY KEY(permanence_id, gender_id))');
        $this->addSql('CREATE INDEX IDX_D9E86865A9457964 ON permanence_gender (permanence_id)');
        $this->addSql('CREATE INDEX IDX_D9E86865708A0E0 ON permanence_gender (gender_id)');
        $this->addSql('CREATE TABLE workshop_gender (workshop_id INT NOT NULL, gender_id INT NOT NULL, PRIMARY KEY(workshop_id, gender_id))');
        $this->addSql('CREATE INDEX IDX_3ACD716B1FDCE57C ON workshop_gender (workshop_id)');
        $this->addSql('CREATE INDEX IDX_3ACD716B708A0E0 ON workshop_gender (gender_id)');
        $this->addSql('ALTER TABLE permanence_gender ADD CONSTRAINT FK_D9E86865A9457964 FOREIGN KEY (permanence_id) REFERENCES note (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE permanence_gender ADD CONSTRAINT FK_D9E86865708A0E0 FOREIGN KEY (gender_id) REFERENCES gender (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_gender ADD CONSTRAINT FK_3ACD716B1FDCE57C FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_gender ADD CONSTRAINT FK_3ACD716B708A0E0 FOREIGN KEY (gender_id) REFERENCES gender (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE permanence_gender DROP CONSTRAINT FK_D9E86865708A0E0');
        $this->addSql('ALTER TABLE workshop_gender DROP CONSTRAINT FK_3ACD716B708A0E0');
        $this->addSql('DROP SEQUENCE gender_id_seq CASCADE');
        $this->addSql('DROP TABLE gender');
        $this->addSql('DROP TABLE permanence_gender');
        $this->addSql('DROP TABLE workshop_gender');
    }
}
