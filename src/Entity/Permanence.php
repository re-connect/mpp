<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ORM\Table(name="note")
 * @ApiResource(
 *     attributes={"access_control"="is_granted('ROLE_USER')", "order"={"date": "DESC"}},
 *     normalizationContext={"groups"={"permanence:read"}},
 *     denormalizationContext={"groups"={"permanence:write"}},
 *     shortName="notes"
 *     )
 * @ApiFilter(SearchFilter::class, properties={"center": "exact"})
 *
 */
class Permanence
{
    use TimestampableEntity;

    /**
     * The id of this note.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @Groups({"read"})
     * @ORM\Column(type="integer")
     */
    private ?int $id;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="date", type="date", nullable=true)
     */
    private ?\DateTimeInterface $date;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="hours", type="integer")
     */
    private ?int $hours;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="nb_pros", type="integer")
     */
    private ?int $nbPros;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="nb_pro_accounts", type="integer")
     */
    private ?int $nbProAccounts;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="nb_beneficiaries", type="integer")
     */
    private ?int $nbBeneficiaries;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="nb_beneficiaries_accounts", type="integer")
     */
    private ?int $nbBeneficiariesAccounts;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="nb_stored_docs", type="integer")
     */
    private ?int $nbStoredDocs;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="beneficiaries_notes", type="text")
     */
    private ?string $beneficiariesNotes;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="pro_notes", type="text")
     */
    private ?string $proNotes;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="reconnect_notes", type="text")
     */
    private ?string $reconnectNotes;

    /**
     * @Groups({"permanence:read", "permanence:write"})
     * @ORM\Column(name="attendees", type="string", length=255, nullable=true)
     */
    private ?string $attendees;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="notes")
     */
    private ?User $author;

    /**
     * @Groups({"permanence:write"})
     * @ORM\ManyToOne(targetEntity="App\Entity\Center", inversedBy="notes")
     */
    private ?Center $center;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"permanence:read", "permanence:write"})
     */
    private ?string $place;

    /**
     * @ORM\ManyToMany(targetEntity=Gender::class, inversedBy="permanences")
     * @Groups({"permanence:read", "permanence:write"})
     */
    private ?Collection $genders;

    public function __construct()
    {
        $this->genders = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->date->format('m/d/Y');
    }

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return DateTime
     */
    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    /**
     * @param DateTime $date
     */
    public function setDate(DateTime $date): void
    {
        $this->date = $date;
    }

    /**
     * @return mixed
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param mixed $author
     */
    public function setAuthor($author): void
    {
        $this->author = $author;
    }

    /**
     * @return Center
     */
    public function getCenter(): ?Center
    {
        return $this->center;
    }

    /**
     * @param ?Center $center
     */
    public function setCenter(Center $center = null): void
    {
        $this->center = $center;
    }

    /**
     * @return int
     */
    public function getHours(): ?int
    {
        return $this->hours;
    }

    /**
     * @param ?int $hours
     */
    public function setHours(int $hours = null): void
    {
        $this->hours = $hours;
    }

    /**
     * @return int
     */
    public function getNbPros(): ?int
    {
        return $this->nbPros;
    }

    /**
     * @param ?int $nbPros
     */
    public function setNbPros(int $nbPros = null): void
    {
        $this->nbPros = $nbPros;
    }

    /**
     * @return int
     */
    public function getNbProAccounts(): ?int
    {
        return $this->nbProAccounts;
    }

    /**
     * @param ?int $nbProAccounts
     */
    public function setNbProAccounts(int $nbProAccounts = null): void
    {
        $this->nbProAccounts = $nbProAccounts;
    }

    /**
     * @return int
     */
    public function getNbBeneficiaries(): ?int
    {
        return $this->nbBeneficiaries;
    }

    /**
     * @param ?int $nbBeneficiaries
     */
    public function setNbBeneficiaries(int $nbBeneficiaries = null): void
    {
        $this->nbBeneficiaries = $nbBeneficiaries;
    }

    /**
     * @return int
     */
    public function getNbBeneficiariesAccounts(): ?int
    {
        return $this->nbBeneficiariesAccounts;
    }

    /**
     * @param ?int $nbBeneficiariesAccounts
     */
    public function setNbBeneficiariesAccounts(int $nbBeneficiariesAccounts = null): void
    {
        $this->nbBeneficiariesAccounts = $nbBeneficiariesAccounts;
    }

    /**
     * @return int
     */
    public function getNbStoredDocs(): ?int
    {
        return $this->nbStoredDocs;
    }

    /**
     * @param ?int $nbStoredDocs
     */
    public function setNbStoredDocs(int $nbStoredDocs = null): void
    {
        $this->nbStoredDocs = $nbStoredDocs;
    }

    /**
     * @return string
     */
    public function getBeneficiariesNotes(): ?string
    {
        return $this->beneficiariesNotes;
    }

    /**
     * @param ?string $beneficiariesNotes
     */
    public function setBeneficiariesNotes(string $beneficiariesNotes = null): void
    {
        $this->beneficiariesNotes = $beneficiariesNotes;
    }

    /**
     * @return string
     */
    public function getProNotes(): ?string
    {
        return $this->proNotes;
    }

    /**
     * @param ?string $proNotes
     */
    public function setProNotes(string $proNotes = null): void
    {
        $this->proNotes = $proNotes;
    }

    /**
     * @return string
     */
    public function getReconnectNotes(): ?string
    {
        return $this->reconnectNotes;
    }

    /**
     * @param ?string $reconnectNotes
     */
    public function setReconnectNotes(string $reconnectNotes = null): void
    {
        $this->reconnectNotes = $reconnectNotes;
    }

    /**
     * @return string
     */
    public function getAttendees(): ?string
    {
        return $this->attendees;
    }

    /**
     * @param ?string $attendees
     */
    public function setAttendees(?string $attendees = null): void
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

    /**
     * @return Collection|Gender[]
     */
    public function getGenders(): Collection
    {
        return $this->genders;
    }

    public function addGender(Gender $gender): self
    {
        if (!$this->genders->contains($gender)) {
            $this->genders[] = $gender;
        }

        return $this;
    }

    public function removeGender(Gender $gender): self
    {
        $this->genders->removeElement($gender);

        return $this;
    }
}
