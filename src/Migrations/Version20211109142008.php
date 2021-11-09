<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211109142008 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE participant_kind_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE project_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE skill_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE topic_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE workshop_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE participant_kind (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE project (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE skill (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE topic (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE workshop (id INT NOT NULL, topic_id INT NOT NULL, participant_kind_id INT NOT NULL, project_id INT NOT NULL, author_id INT NOT NULL, center_id INT NOT NULL, date DATE NOT NULL, nb_participants INT NOT NULL, global_report TEXT DEFAULT NULL, topic_precision TEXT DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_9B6F02C41F55203D ON workshop (topic_id)');
        $this->addSql('CREATE INDEX IDX_9B6F02C4AA6DE3A1 ON workshop (participant_kind_id)');
        $this->addSql('CREATE INDEX IDX_9B6F02C4166D1F9C ON workshop (project_id)');
        $this->addSql('CREATE INDEX IDX_9B6F02C4F675F31B ON workshop (author_id)');
        $this->addSql('CREATE INDEX IDX_9B6F02C45932F377 ON workshop (center_id)');
        $this->addSql('CREATE TABLE workshop_skill (workshop_id INT NOT NULL, skill_id INT NOT NULL, PRIMARY KEY(workshop_id, skill_id))');
        $this->addSql('CREATE INDEX IDX_B6BFB76D1FDCE57C ON workshop_skill (workshop_id)');
        $this->addSql('CREATE INDEX IDX_B6BFB76D5585C142 ON workshop_skill (skill_id)');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT FK_9B6F02C41F55203D FOREIGN KEY (topic_id) REFERENCES topic (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT FK_9B6F02C4AA6DE3A1 FOREIGN KEY (participant_kind_id) REFERENCES participant_kind (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT FK_9B6F02C4166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT FK_9B6F02C4F675F31B FOREIGN KEY (author_id) REFERENCES users (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT FK_9B6F02C45932F377 FOREIGN KEY (center_id) REFERENCES center (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_skill ADD CONSTRAINT FK_B6BFB76D1FDCE57C FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_skill ADD CONSTRAINT FK_B6BFB76D5585C142 FOREIGN KEY (skill_id) REFERENCES skill (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE center ADD permanence BOOLEAN DEFAULT NULL');
        $this->addSql('ALTER TABLE center ADD workshop BOOLEAN DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE workshop DROP CONSTRAINT FK_9B6F02C4AA6DE3A1');
        $this->addSql('ALTER TABLE workshop DROP CONSTRAINT FK_9B6F02C4166D1F9C');
        $this->addSql('ALTER TABLE workshop_skill DROP CONSTRAINT FK_B6BFB76D5585C142');
        $this->addSql('ALTER TABLE workshop DROP CONSTRAINT FK_9B6F02C41F55203D');
        $this->addSql('ALTER TABLE workshop_skill DROP CONSTRAINT FK_B6BFB76D1FDCE57C');
        $this->addSql('DROP SEQUENCE participant_kind_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE project_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE skill_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE topic_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE workshop_id_seq CASCADE');
        $this->addSql('DROP TABLE participant_kind');
        $this->addSql('DROP TABLE project');
        $this->addSql('DROP TABLE skill');
        $this->addSql('DROP TABLE topic');
        $this->addSql('DROP TABLE workshop');
        $this->addSql('DROP TABLE workshop_skill');
        $this->addSql('ALTER TABLE center DROP permanence');
        $this->addSql('ALTER TABLE center DROP workshop');
    }
}
