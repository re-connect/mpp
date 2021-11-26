<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\WorkshopRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"write"}}
 * )
 * @ORM\Entity(repositoryClass=WorkshopRepository::class)
 * @ApiFilter(SearchFilter::class, properties={"center": "exact"})
 */
class Workshop
{
    use TimestampableEntity;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private ?int $id;

    /**
     * @ORM\Column(type="date")
     * @Groups({"read", "write"})
     */
    private ?\DateTimeInterface $date;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read", "write"})
     */
    private ?int $nbParticipants;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"read", "write"})
     */
    private ?string $globalReport;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"read", "write"})
     */
    private ?string $topicPrecision;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="workshops")
     * @ORM\JoinColumn(nullable=false)
     */
    private ?User $author;

    /**
     * @ORM\ManyToOne(targetEntity=Center::class, inversedBy="workshops")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"write"})
     */
    private ?Center $center;

    /**
     * @ORM\ManyToMany(targetEntity=ParticipantKind::class, inversedBy="workshops")
     * @Groups({"write"})
     */
    private ?Collection $participantKinds;

    /**
     * @ORM\ManyToMany(targetEntity=Topic::class, mappedBy="workshops")
     * @Groups({"write"})
     */
    private ?Collection $topics;

    /**
     * @ORM\ManyToMany(targetEntity=AgeBreakpoint::class, inversedBy="workshops")
     * @Groups({"write"})
     */
    private ?Collection $ageBreakpoints;

    /**
     * @ORM\ManyToMany(targetEntity=EquipmentSupplier::class, inversedBy="workshops")
     * @Groups({"write"})
     */
    private ?Collection $equipmentSuppliers;

    /**
     * @ORM\ManyToMany(targetEntity=UsedEquipment::class, inversedBy="workshops")
     * @Groups({"write"})
     */
    private ?Collection $usedEquipments;

    /**
     * @ORM\Column(type="boolean", options={"default":"0"})
     */
    private ?bool $usedVault = false;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"write"})
     */
    private ?int $nbBeneficiariesAccounts;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"write"})
     */
    private ?int $nbStoredDocs;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"write"})
     */
    private ?int $nbCreatedEvents;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"write"})
     */
    private ?int $nbCreatedContacts;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"write"})
     */
    private ?int $nbCreatedNotes;

    /**
     * @ORM\ManyToMany(targetEntity=Skill::class, inversedBy="workshops")
     * @Groups({"write"})
     */
    private ?Collection $skills;

    public function __construct()
    {
        $this->participantKinds = new ArrayCollection();
        $this->topics = new ArrayCollection();
        $this->ageBreakpoints = new ArrayCollection();
        $this->equipmentSuppliers = new ArrayCollection();
        $this->usedEquipments = new ArrayCollection();
        $this->skills = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getNbParticipants(): ?int
    {
        return $this->nbParticipants;
    }

    public function setNbParticipants(int $nbParticipants): self
    {
        $this->nbParticipants = $nbParticipants;

        return $this;
    }

    public function getGlobalReport(): ?string
    {
        return $this->globalReport;
    }

    public function setGlobalReport(?string $globalReport): self
    {
        $this->globalReport = $globalReport;

        return $this;
    }

    public function getTopicPrecision(): ?string
    {
        return $this->topicPrecision;
    }

    public function setTopicPrecision(?string $topicPrecision): self
    {
        $this->topicPrecision = $topicPrecision;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getCenter(): ?Center
    {
        return $this->center;
    }

    public function setCenter(?Center $center): self
    {
        $this->center = $center;

        return $this;
    }

    /**
     * @return Collection|ParticipantKind[]
     */
    public function getParticipantKinds(): Collection
    {
        return $this->participantKinds;
    }

    public function addParticipantKind(ParticipantKind $participantKind): self
    {
        if (!$this->participantKinds->contains($participantKind)) {
            $this->participantKinds[] = $participantKind;
        }

        return $this;
    }

    public function removeParticipantKind(ParticipantKind $participantKind): self
    {
        $this->participantKinds->removeElement($participantKind);

        return $this;
    }

    /**
     * @return Collection|Topic[]
     */
    public function getTopics(): Collection
    {
        return $this->topics;
    }

    public function addTopic(Topic $topic): self
    {
        if (!$this->topics->contains($topic)) {
            $this->topics[] = $topic;
            $topic->addWorkshop($this);
        }

        return $this;
    }

    public function removeTopic(Topic $topic): self
    {
        if ($this->topics->removeElement($topic)) {
            $topic->removeWorkshop($this);
        }

        return $this;
    }

    /**
     * @return Collection|AgeBreakpoint[]
     */
    public function getAgeBreakpoints(): Collection
    {
        return $this->ageBreakpoints;
    }

    public function addAgeBreakpoint(AgeBreakpoint $ageBreakpoint): self
    {
        if (!$this->ageBreakpoints->contains($ageBreakpoint)) {
            $this->ageBreakpoints[] = $ageBreakpoint;
        }

        return $this;
    }

    public function removeAgeBreakpoint(AgeBreakpoint $ageBreakpoint): self
    {
        $this->ageBreakpoints->removeElement($ageBreakpoint);

        return $this;
    }

    /**
     * @return Collection|EquipmentSupplier[]
     */
    public function getEquipmentSuppliers(): Collection
    {
        return $this->equipmentSuppliers;
    }

    public function addEquipmentSupplier(EquipmentSupplier $equipmentSupplier): self
    {
        if (!$this->equipmentSuppliers->contains($equipmentSupplier)) {
            $this->equipmentSuppliers[] = $equipmentSupplier;
        }

        return $this;
    }

    public function removeEquipmentSupplier(EquipmentSupplier $equipmentSupplier): self
    {
        $this->equipmentSuppliers->removeElement($equipmentSupplier);

        return $this;
    }

    /**
     * @return Collection|UsedEquipment[]
     */
    public function getUsedEquipments(): Collection
    {
        return $this->usedEquipments;
    }

    public function addUsedEquipment(UsedEquipment $usedEquipment): self
    {
        if (!$this->usedEquipments->contains($usedEquipment)) {
            $this->usedEquipments[] = $usedEquipment;
        }

        return $this;
    }

    public function removeUsedEquipment(UsedEquipment $usedEquipment): self
    {
        $this->usedEquipments->removeElement($usedEquipment);

        return $this;
    }

    public function hasUsedVault(): ?bool
    {
        return $this->usedVault;
    }

    public function setUsedVault(bool $usedVault): self
    {
        $this->usedVault = $usedVault;

        return $this;
    }

    public function getNbBeneficiariesAccounts(): ?int
    {
        return $this->nbBeneficiariesAccounts;
    }

    public function setNbBeneficiariesAccounts(int $nbBeneficiariesAccounts): self
    {
        $this->nbBeneficiariesAccounts = $nbBeneficiariesAccounts;

        return $this;
    }

    public function getNbStoredDocs(): ?int
    {
        return $this->nbStoredDocs;
    }

    public function setNbStoredDocs(int $nbStoredDocs): self
    {
        $this->nbStoredDocs = $nbStoredDocs;

        return $this;
    }

    public function getNbCreatedEvents(): ?int
    {
        return $this->nbCreatedEvents;
    }

    public function setNbCreatedEvents(int $nbCreatedEvents): self
    {
        $this->nbCreatedEvents = $nbCreatedEvents;

        return $this;
    }

    public function getNbCreatedContacts(): ?int
    {
        return $this->nbCreatedContacts;
    }

    public function setNbCreatedContacts(int $nbCreatedContacts): self
    {
        $this->nbCreatedContacts = $nbCreatedContacts;

        return $this;
    }

    public function getNbCreatedNotes(): ?int
    {
        return $this->nbCreatedNotes;
    }

    public function setNbCreatedNotes(int $nbCreatedNotes): self
    {
        $this->nbCreatedNotes = $nbCreatedNotes;

        return $this;
    }

    /**
     * @return Collection|Skill[]
     */
    public function getSkills(): Collection
    {
        return $this->skills;
    }

    public function addSkill(Skill $skill): self
    {
        if (!$this->skills->contains($skill)) {
            $this->skills[] = $skill;
        }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        $this->skills->removeElement($skill);

        return $this;
    }
}
