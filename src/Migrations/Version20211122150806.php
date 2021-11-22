<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211122150806 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE workshop DROP CONSTRAINT fk_9b6f02c4166d1f9c');
        $this->addSql('DROP SEQUENCE project_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE age_breakpoint_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE equipment_supplier_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE used_equipment_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE age_breakpoint (id INT NOT NULL, range VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE equipment_supplier (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE topic_workshop (topic_id INT NOT NULL, workshop_id INT NOT NULL, PRIMARY KEY(topic_id, workshop_id))');
        $this->addSql('CREATE INDEX IDX_6D5E8FC21F55203D ON topic_workshop (topic_id)');
        $this->addSql('CREATE INDEX IDX_6D5E8FC21FDCE57C ON topic_workshop (workshop_id)');
        $this->addSql('CREATE TABLE used_equipment (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE workshop_participant_kind (workshop_id INT NOT NULL, participant_kind_id INT NOT NULL, PRIMARY KEY(workshop_id, participant_kind_id))');
        $this->addSql('CREATE INDEX IDX_E99C19FE1FDCE57C ON workshop_participant_kind (workshop_id)');
        $this->addSql('CREATE INDEX IDX_E99C19FEAA6DE3A1 ON workshop_participant_kind (participant_kind_id)');
        $this->addSql('CREATE TABLE workshop_age_breakpoint (workshop_id INT NOT NULL, age_breakpoint_id INT NOT NULL, PRIMARY KEY(workshop_id, age_breakpoint_id))');
        $this->addSql('CREATE INDEX IDX_42BE8AAA1FDCE57C ON workshop_age_breakpoint (workshop_id)');
        $this->addSql('CREATE INDEX IDX_42BE8AAA3B76B7F9 ON workshop_age_breakpoint (age_breakpoint_id)');
        $this->addSql('CREATE TABLE workshop_equipment_supplier (workshop_id INT NOT NULL, equipment_supplier_id INT NOT NULL, PRIMARY KEY(workshop_id, equipment_supplier_id))');
        $this->addSql('CREATE INDEX IDX_65EC61831FDCE57C ON workshop_equipment_supplier (workshop_id)');
        $this->addSql('CREATE INDEX IDX_65EC61834B9F99AB ON workshop_equipment_supplier (equipment_supplier_id)');
        $this->addSql('CREATE TABLE workshop_used_equipment (workshop_id INT NOT NULL, used_equipment_id INT NOT NULL, PRIMARY KEY(workshop_id, used_equipment_id))');
        $this->addSql('CREATE INDEX IDX_924208111FDCE57C ON workshop_used_equipment (workshop_id)');
        $this->addSql('CREATE INDEX IDX_924208114FC3E226 ON workshop_used_equipment (used_equipment_id)');
        $this->addSql('ALTER TABLE topic_workshop ADD CONSTRAINT FK_6D5E8FC21F55203D FOREIGN KEY (topic_id) REFERENCES topic (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE topic_workshop ADD CONSTRAINT FK_6D5E8FC21FDCE57C FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_participant_kind ADD CONSTRAINT FK_E99C19FE1FDCE57C FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_participant_kind ADD CONSTRAINT FK_E99C19FEAA6DE3A1 FOREIGN KEY (participant_kind_id) REFERENCES participant_kind (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_age_breakpoint ADD CONSTRAINT FK_42BE8AAA1FDCE57C FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_age_breakpoint ADD CONSTRAINT FK_42BE8AAA3B76B7F9 FOREIGN KEY (age_breakpoint_id) REFERENCES age_breakpoint (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_equipment_supplier ADD CONSTRAINT FK_65EC61831FDCE57C FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_equipment_supplier ADD CONSTRAINT FK_65EC61834B9F99AB FOREIGN KEY (equipment_supplier_id) REFERENCES equipment_supplier (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_used_equipment ADD CONSTRAINT FK_924208111FDCE57C FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_used_equipment ADD CONSTRAINT FK_924208114FC3E226 FOREIGN KEY (used_equipment_id) REFERENCES used_equipment (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE project');
        $this->addSql('DROP TABLE workshop_skill');
        $this->addSql('ALTER TABLE skill ADD topic_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE skill ADD CONSTRAINT FK_5E3DE4771F55203D FOREIGN KEY (topic_id) REFERENCES topic (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_5E3DE4771F55203D ON skill (topic_id)');
        $this->addSql('ALTER TABLE workshop DROP CONSTRAINT fk_9b6f02c41f55203d');
        $this->addSql('ALTER TABLE workshop DROP CONSTRAINT fk_9b6f02c4aa6de3a1');
        $this->addSql('DROP INDEX idx_9b6f02c4166d1f9c');
        $this->addSql('DROP INDEX idx_9b6f02c4aa6de3a1');
        $this->addSql('DROP INDEX idx_9b6f02c41f55203d');
        $this->addSql('ALTER TABLE workshop ADD used_vault BOOLEAN DEFAULT \'false\' NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD nb_beneficiaries_accounts INT NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD nb_stored_docs INT NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD nb_created_events INT NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD nb_created_contacts INT NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD nb_created_notes INT NOT NULL');
        $this->addSql('ALTER TABLE workshop DROP topic_id');
        $this->addSql('ALTER TABLE workshop DROP participant_kind_id');
        $this->addSql('ALTER TABLE workshop DROP project_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE workshop_age_breakpoint DROP CONSTRAINT FK_42BE8AAA3B76B7F9');
        $this->addSql('ALTER TABLE workshop_equipment_supplier DROP CONSTRAINT FK_65EC61834B9F99AB');
        $this->addSql('ALTER TABLE workshop_used_equipment DROP CONSTRAINT FK_924208114FC3E226');
        $this->addSql('DROP SEQUENCE age_breakpoint_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE equipment_supplier_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE used_equipment_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE project_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE project (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE workshop_skill (workshop_id INT NOT NULL, skill_id INT NOT NULL, PRIMARY KEY(workshop_id, skill_id))');
        $this->addSql('CREATE INDEX idx_b6bfb76d1fdce57c ON workshop_skill (workshop_id)');
        $this->addSql('CREATE INDEX idx_b6bfb76d5585c142 ON workshop_skill (skill_id)');
        $this->addSql('ALTER TABLE workshop_skill ADD CONSTRAINT fk_b6bfb76d1fdce57c FOREIGN KEY (workshop_id) REFERENCES workshop (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop_skill ADD CONSTRAINT fk_b6bfb76d5585c142 FOREIGN KEY (skill_id) REFERENCES skill (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE age_breakpoint');
        $this->addSql('DROP TABLE equipment_supplier');
        $this->addSql('DROP TABLE topic_workshop');
        $this->addSql('DROP TABLE used_equipment');
        $this->addSql('DROP TABLE workshop_participant_kind');
        $this->addSql('DROP TABLE workshop_age_breakpoint');
        $this->addSql('DROP TABLE workshop_equipment_supplier');
        $this->addSql('DROP TABLE workshop_used_equipment');
        $this->addSql('ALTER TABLE workshop ADD topic_id INT NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD participant_kind_id INT NOT NULL');
        $this->addSql('ALTER TABLE workshop ADD project_id INT NOT NULL');
        $this->addSql('ALTER TABLE workshop DROP used_vault');
        $this->addSql('ALTER TABLE workshop DROP nb_beneficiaries_accounts');
        $this->addSql('ALTER TABLE workshop DROP nb_stored_docs');
        $this->addSql('ALTER TABLE workshop DROP nb_created_events');
        $this->addSql('ALTER TABLE workshop DROP nb_created_contacts');
        $this->addSql('ALTER TABLE workshop DROP nb_created_notes');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT fk_9b6f02c41f55203d FOREIGN KEY (topic_id) REFERENCES topic (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT fk_9b6f02c4aa6de3a1 FOREIGN KEY (participant_kind_id) REFERENCES participant_kind (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE workshop ADD CONSTRAINT fk_9b6f02c4166d1f9c FOREIGN KEY (project_id) REFERENCES project (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_9b6f02c4166d1f9c ON workshop (project_id)');
        $this->addSql('CREATE INDEX idx_9b6f02c4aa6de3a1 ON workshop (participant_kind_id)');
        $this->addSql('CREATE INDEX idx_9b6f02c41f55203d ON workshop (topic_id)');
        $this->addSql('ALTER TABLE skill DROP CONSTRAINT FK_5E3DE4771F55203D');
        $this->addSql('DROP INDEX IDX_5E3DE4771F55203D');
        $this->addSql('ALTER TABLE skill DROP topic_id');
    }
}
