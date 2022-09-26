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
 *     attributes={"order"={"date": "DESC"}},
 *     normalizationContext={"groups"={"workshop:read"}},
 *     denormalizationContext={"groups"={"workshop:write"}}
 * )
 * @ApiFilter(SearchFilter::class, properties={"center": "exact"})
 */
#[ORM\Entity(repositoryClass: WorkshopRepository::class)]
class Workshop
{
    use TimestampableEntity;

    #[Groups(['read'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'date')]
    private ?\DateTimeInterface $date = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer')]
    private ?int $nbParticipants = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $globalReport = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $topicPrecision = null;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'workshops')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author = null;

    #[Groups(['workshop:write'])]
    #[ORM\ManyToOne(targetEntity: Center::class, inversedBy: 'workshops')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Center $center = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\ManyToMany(targetEntity: ParticipantKind::class, inversedBy: 'workshops')]
    private ?Collection $participantKinds;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\ManyToMany(targetEntity: Topic::class, mappedBy: 'workshops')]
    private ?Collection $topics;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\ManyToMany(targetEntity: AgeBreakpoint::class, inversedBy: 'workshops')]
    private ?Collection $ageBreakpoints;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\ManyToMany(targetEntity: EquipmentSupplier::class, inversedBy: 'workshops')]
    private ?Collection $equipmentSuppliers;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\ManyToMany(targetEntity: UsedEquipment::class, inversedBy: 'workshops')]
    private ?Collection $usedEquipments;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'boolean', options: ['default' => 0])]
    private ?bool $usedVault = false;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer')]
    private ?int $nbBeneficiariesAccounts = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer')]
    private ?int $nbStoredDocs = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer')]
    private ?int $nbCreatedEvents = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer')]
    private ?int $nbCreatedContacts = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer')]
    private ?int $nbCreatedNotes = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\ManyToMany(targetEntity: Skill::class, inversedBy: 'workshops')]
    private ?Collection $skills;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'string', length: 255)]
    private ?string $attendees = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $improvementAxis = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\ManyToOne(targetEntity: Duration::class, inversedBy: 'workshops')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Duration $duration = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private ?int $maleCount = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private ?int $femaleCount = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private ?int $noGenderCount = null;

    #[Groups(['workshop:read', 'workshop:write'])]
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $place = null;

    public function __construct()
    {
        $this->participantKinds = new ArrayCollection();
        $this->topics = new ArrayCollection();
        $this->ageBreakpoints = new ArrayCollection();
        $this->equipmentSuppliers = new ArrayCollection();
        $this->usedEquipments = new ArrayCollection();
        $this->skills = new ArrayCollection();
        $this->genders = new ArrayCollection();
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

    public function getAttendees(): ?string
    {
        return $this->attendees;
    }

    public function setAttendees(string $attendees): self
    {
        $this->attendees = $attendees;

        return $this;
    }

    public function getImprovementAxis(): ?string
    {
        return $this->improvementAxis;
    }

    public function setImprovementAxis(?string $improvementAxis): self
    {
        $this->improvementAxis = $improvementAxis;

        return $this;
    }

    public function getDuration(): ?Duration
    {
        return $this->duration;
    }

    public function setDuration(?Duration $duration): self
    {
        $this->duration = $duration;

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

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(?string $place): self
    {
        $this->place = $place;

        return $this;
    }
}
