<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240503090553 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE note ALTER nb_uninterested_beneficiaries DROP DEFAULT');
        $this->addSql('ALTER TABLE note ALTER nb_helped_beneficiaries DROP DEFAULT');
        $this->addSql('ALTER TABLE workshop ADD update_proposal TEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE workshop ADD add_proposal TEXT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE workshop DROP update_proposal');
        $this->addSql('ALTER TABLE workshop DROP add_proposal');
        $this->addSql('ALTER TABLE note ALTER nb_uninterested_beneficiaries SET DEFAULT 0');
        $this->addSql('ALTER TABLE note ALTER nb_helped_beneficiaries SET DEFAULT 0');
    }
}
