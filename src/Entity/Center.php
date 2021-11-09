<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @ORM\Entity
 * @ApiResource(
 *     attributes={"access_control"="is_granted('ROLE_USER')", "pagination_items_per_page"=100},
 *     order={"name": "ASC"})
 */
class Center
{
    /**
     * The id of this person.
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     * @ORM\Column(type="integer")
     * @Groups({"read", "write"})
     */
    private ?int $id;

    /**
     * @Groups({"read", "write"})
     * @ORM\Column(name="name", type="string", length=255)
     */
    public ?string $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Permanence", mappedBy="center")
     * @Groups({"read"})
     */
    private ?Collection $notes;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read"})
     */
    private ?string $association;

    /**
     * @ORM\ManyToMany(targetEntity=CenterTag::class, mappedBy="centers")
     * @Groups({"read"})
     */
    private ?Collection $tags;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private ?bool $permanence;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private ?Collection $workshop;

    /**
     * @ORM\OneToMany(targetEntity=Workshop::class, mappedBy="center")
     */
    private ?Collection $workshops;

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->notes = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->workshops = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name = null): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getNotes()
    {
        return $this->notes;
    }

    /**
     * @param mixed $notes
     */
    public function setNotes($notes): void
    {
        $this->notes = $notes;
    }

    /**
     * @param Permanence $note
     *
     * @return $this
     */
    public function addNote(Permanence $note)
    {
        $this->notes[] = $note;

        return $this;
    }

    /**
     * @param Permanence $note
     *
     * @return $this
     */
    public function removeNote(Permanence $note)
    {
        $this->notes->removeElement($note);

        return $this;
    }

    public function getAssociation(): ?string
    {
        return $this->association;
    }

    public function setAssociation(?string $association): self
    {
        $this->association = $association;

        return $this;
    }

    /**
     * @return Collection|CenterTag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(CenterTag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
            $tag->addCenter($this);
        }

        return $this;
    }

    public function removeTag(CenterTag $tag): self
    {
        if ($this->tags->removeElement($tag)) {
            $tag->removeCenter($this);
        }

        return $this;
    }

    /**
     * @Groups({"read"})
     * @SerializedName("beneficiaryCount")
     */
    public function getBeneficiariesMeetCount(): int
    {
        $total = 0;
        /** @var Permanence $note */
        foreach ($this->notes as $note) {
            $total += $note->getNbBeneficiaries();
        }
        return $total;
    }

    /**
     * @Groups({"read"})
     * @SerializedName("createdBeneficiaryCount")
     */
    public function getBeneficiariesCreatedCount(): int
    {
        $total = 0;
        /** @var Permanence $note */
        foreach ($this->notes as $note) {
            $total += $note->getNbBeneficiariesAccounts();
        }
        return $total;
    }

    /**
     * @Groups({"read"})
     * @SerializedName("documentsCount")
     */
    public function getStoredDocuments(): int
    {
        $total = 0;
        /** @var Permanence $note */
        foreach ($this->notes as $note) {
            $total += $note->getNbStoredDocs();
        }
        return $total;
    }

    public function hasPermanence(): ?bool
    {
        return $this->permanence;
    }

    public function setPermanence(?bool $permanence): self
    {
        $this->permanence = $permanence;

        return $this;
    }

    public function hasWorkshop(): ?bool
    {
        return $this->workshop;
    }

    public function setWorkshop(?bool $workshop): self
    {
        $this->workshop = $workshop;

        return $this;
    }

    /**
     * @return Collection|Workshop[]
     */
    public function getWorkshops(): Collection
    {
        return $this->workshops;
    }

    public function addWorkshop(Workshop $workshop): self
    {
        if (!$this->workshops->contains($workshop)) {
            $this->workshops[] = $workshop;
            $workshop->setCenter($this);
        }

        return $this;
    }

    public function removeWorkshop(Workshop $workshop): self
    {
        if ($this->workshops->removeElement($workshop)) {
            // set the owning side to null (unless already changed)
            if ($workshop->getCenter() === $this) {
                $workshop->setCenter(null);
            }
        }

        return $this;
    }
}
