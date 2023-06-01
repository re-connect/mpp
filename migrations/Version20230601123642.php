<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use App\Entity\Center;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230601123642 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(sprintf('UPDATE note SET place = \'%s\' WHERE place IS NULL', Center::PLACE_DEFAULT_VALUE));
        $this->addSql(sprintf('UPDATE workshop SET place = \'%s\' WHERE place IS NULL', Center::PLACE_DEFAULT_VALUE));
        $this->addSql(sprintf('ALTER TABLE center ADD place VARCHAR(255) NOT NULL DEFAULT \'%s\'', Center::PLACE_DEFAULT_VALUE));
        $this->addSql('ALTER TABLE note ALTER place SET NOT NULL');
        $this->addSql('ALTER TABLE workshop ALTER place SET NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE center DROP place');
        $this->addSql('ALTER TABLE note ALTER place DROP NOT NULL');
        $this->addSql('ALTER TABLE workshop ALTER place DROP NOT NULL');
    }
}
