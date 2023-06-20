<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    shortName: 'notes',
    operations: [
        new Get(),
        new Put(),
        new Patch(),
        new Delete(),
        new GetCollection(),
        new Post(),
    ],
    normalizationContext: ['groups' => ['permanence:read']],
    denormalizationContext: ['groups' => ['permanence:write']],
    order: ['date' => 'DESC'],
    security: "is_granted('ROLE_USER')"
)]
#[ORM\Table(name: 'note')]
#[ORM\Entity]
#[ApiFilter(filterClass: SearchFilter::class, properties: ['center' => 'exact'])]
class Permanence implements \Stringable
{
    use TimestampableEntity;

    #[Groups(['read'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'date', type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'hours', type: Types::INTEGER)]
    private ?int $hours = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'nb_pros', type: Types::INTEGER)]
    private ?int $nbPros = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'nb_pro_accounts', type: Types::INTEGER)]
    private ?int $nbProAccounts = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'nb_beneficiaries', type: Types::INTEGER)]
    private ?int $nbBeneficiaries = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'nb_beneficiaries_accounts', type: Types::INTEGER)]
    private ?int $nbBeneficiariesAccounts = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'nb_stored_docs', type: Types::INTEGER)]
    private ?int $nbStoredDocs = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'beneficiaries_notes', type: Types::TEXT)]
    private ?string $beneficiariesNotes = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'pro_notes', type: Types::TEXT)]
    private ?string $proNotes = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'reconnect_notes', type: Types::TEXT)]
    private ?string $reconnectNotes = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(name: 'attendees', type: Types::STRING, length: 255, nullable: true)]
    private ?string $attendees = null;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'notes')]
    private ?User $author = null;

    #[Groups(['permanence:write'])]
    #[ORM\ManyToOne(targetEntity: Center::class, inversedBy: 'notes')]
    private ?Center $center = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $place = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $maleCount = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $femaleCount = null;

    #[Groups(['permanence:read', 'permanence:write'])]
    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $noGenderCount = null;

    public function __construct()
    {
    }

    public function __toString(): string
    {
        return $this->date->format('m/d/Y');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTime $date): void
    {
        $this->date = $date;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(mixed $author): void
    {
        $this->author = $author;
    }

    public function getCenter(): ?Center
    {
        return $this->center;
    }

    public function setCenter(Center $center = null): void
    {
        $this->center = $center;
    }

    public function getHours(): ?int
    {
        return $this->hours;
    }

    public function setHours(int $hours = null): void
    {
        $this->hours = $hours;
    }

    public function getNbPros(): ?int
    {
        return $this->nbPros;
    }

    public function setNbPros(int $nbPros = null): void
    {
        $this->nbPros = $nbPros;
    }

    public function getNbProAccounts(): ?int
    {
        return $this->nbProAccounts;
    }

    public function setNbProAccounts(int $nbProAccounts = null): void
    {
        $this->nbProAccounts = $nbProAccounts;
    }

    public function getNbBeneficiaries(): ?int
    {
        return $this->nbBeneficiaries;
    }

    public function setNbBeneficiaries(int $nbBeneficiaries = null): void
    {
        $this->nbBeneficiaries = $nbBeneficiaries;
    }

    public function getNbBeneficiariesAccounts(): ?int
    {
        return $this->nbBeneficiariesAccounts;
    }

    public function setNbBeneficiariesAccounts(int $nbBeneficiariesAccounts = null): void
    {
        $this->nbBeneficiariesAccounts = $nbBeneficiariesAccounts;
    }

    public function getNbStoredDocs(): ?int
    {
        return $this->nbStoredDocs;
    }

    public function setNbStoredDocs(int $nbStoredDocs = null): void
    {
        $this->nbStoredDocs = $nbStoredDocs;
    }

    public function getBeneficiariesNotes(): ?string
    {
        return $this->beneficiariesNotes;
    }

    public function setBeneficiariesNotes(string $beneficiariesNotes = null): void
    {
        $this->beneficiariesNotes = $beneficiariesNotes;
    }

    public function getProNotes(): ?string
    {
        return $this->proNotes;
    }

    public function setProNotes(string $proNotes = null): void
    {
        $this->proNotes = $proNotes;
    }

    public function getReconnectNotes(): ?string
    {
        return $this->reconnectNotes;
    }

    public function setReconnectNotes(string $reconnectNotes = null): void
    {
        $this->reconnectNotes = $reconnectNotes;
    }

    public function getAttendees(): ?string
    {
        return $this->attendees;
    }

    public function setAttendees(string $attendees = null): void
    {
        $this->attendees = $attendees;
    }

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(?string $place): self
    {
        $this->place = $place;

        return $this;
    }

    public function getMaleCount(): ?int
    {
        return $this->maleCount;
    }

    public function setMaleCount(?int $maleCount): self
    {
        $this->maleCount = $maleCount;

        return $this;
    }

    public function getFemaleCount(): ?int
    {
        return $this->femaleCount;
    }

    public function setFemaleCount(?int $femaleCount): self
    {
        $this->femaleCount = $femaleCount;

        return $this;
    }

    public function getNoGenderCount(): ?int
    {
        return $this->noGenderCount;
    }

    public function setNoGenderCount(?int $noGenderCount): self
    {
        $this->noGenderCount = $noGenderCount;

        return $this;
    }
}
