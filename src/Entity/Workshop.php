<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WorkshopRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=WorkshopRepository::class)
 */
class Workshop
{
    use TimestampableEntity;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private ?int $id;

    /**
     * @ORM\Column(type="date")
     */
    private ?\DateTimeInterface $date;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $nbParticipants;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $globalReport;

    /**
     * @ORM\ManyToOne(targetEntity=Topic::class, inversedBy="workshops")
     * @ORM\JoinColumn(nullable=false)
     */
    private ?Topic $topic;

    /**
     * @ORM\ManyToOne(targetEntity=ParticipantKind::class, inversedBy="workshops")
     * @ORM\JoinColumn(nullable=false)
     */
    private ?ParticipantKind $participantKind;

    /**
     * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="workshops")
     * @ORM\JoinColumn(nullable=false)
     */
    private ?Project $project;

    /**
     * @ORM\ManyToMany(targetEntity=Skill::class, inversedBy="workshops")
     */
    private ?Collection $skills;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $topicPrecision;

    public function __construct()
    {
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

    public function getTopic(): ?topic
    {
        return $this->topic;
    }

    public function setTopic(?topic $topic): self
    {
        $this->topic = $topic;

        return $this;
    }

    public function getParticipantKind(): ?ParticipantKind
    {
        return $this->participantKind;
    }

    public function setParticipantKind(?ParticipantKind $participantKind): self
    {
        $this->participantKind = $participantKind;

        return $this;
    }

    public function getProject(): ?project
    {
        return $this->project;
    }

    public function setProject(?project $project): self
    {
        $this->project = $project;

        return $this;
    }

    /**
     * @return Collection|skill[]
     */
    public function getSkills(): Collection
    {
        return $this->skills;
    }

    public function addSkill(skill $skill): self
    {
        if (!$this->skills->contains($skill)) {
            $this->skills[] = $skill;
        }

        return $this;
    }

    public function removeSkill(skill $skill): self
    {
        $this->skills->removeElement($skill);

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
}
