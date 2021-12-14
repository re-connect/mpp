<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211214090806 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE note ALTER date TYPE TIMESTAMP(0) WITHOUT TIME ZONE');
        $this->addSql('ALTER TABLE note ALTER date DROP DEFAULT');
        $this->addSql('ALTER TABLE workshop ALTER date TYPE TIMESTAMP(0) WITHOUT TIME ZONE');
        $this->addSql('ALTER TABLE workshop ALTER date DROP DEFAULT');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE note ALTER date TYPE DATE');
        $this->addSql('ALTER TABLE note ALTER date DROP DEFAULT');
        $this->addSql('ALTER TABLE workshop ALTER date TYPE DATE');
        $this->addSql('ALTER TABLE workshop ALTER date DROP DEFAULT');
    }
}
