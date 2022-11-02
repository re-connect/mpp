<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    operations: [
        new Get(),
        new Put(),
        new Patch(),
        new Delete(),
        new GetCollection(),
        new Post(),
    ],
    order: ['name' => 'ASC'],
    paginationItemsPerPage: 500,
    security: 'is_granted(\'ROLE_USER\')')
]
#[ORM\Entity]
class Center implements \Stringable
{
    #[Groups(['read', 'write'])]
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'IDENTITY')]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column(name: 'name', type: Types::STRING, length: 255)]
    public ?string $name = null;

    /** @var Collection<int, Permanence> */
    #[Groups(['read'])]
    #[ORM\OneToMany(mappedBy: 'center', targetEntity: Permanence::class)]
    private Collection $notes;

    #[Groups(['read'])]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $association = null;

    /** @var Collection<int, CenterTag>> */
    #[Groups(['read'])]
    #[ORM\ManyToMany(targetEntity: CenterTag::class, mappedBy: 'centers')]
    private Collection $tags;

    #[ORM\Column(type: Types::BOOLEAN, nullable: true, options: ['default' => 1])]
    private ?bool $permanence = true;

    #[ORM\Column(type: Types::BOOLEAN, nullable: true, options: ['default' => 0])]
    private ?bool $workshop = false;

    /** @var Collection<int, Workshop> */
    #[ORM\OneToMany(mappedBy: 'center', targetEntity: Workshop::class)]
    private Collection $workshops;

    public function __toString(): string
    {
        return (string) $this->name;
    }

    public function __construct()
    {
        $this->notes = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->workshops = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name = null): void
    {
        $this->name = $name;
    }

    /**
     * @return Collection<int, Permanence>
     */
    public function getNotes(): Collection
    {
        return $this->notes;
    }

    /** @param Collection<int, Permanence> $notes */
    public function setNotes(Collection $notes): void
    {
        $this->notes = $notes;
    }

    public function addNote(Permanence $note): self
    {
        $this->notes->add($note);

        return $this;
    }

    public function removeNote(Permanence $note): self
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
     * @return Collection<int, CenterTag>
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(CenterTag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags->add($tag);
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

    #[Groups('read')]
    public function getBeneficiariesCount(): int
    {
        return array_reduce($this->notes->toArray(), fn (int $acc, Permanence $note) => $acc + $note->getNbBeneficiaries(), 0);
    }

    #[Groups('read')]
    public function getCreatedBeneficiaryCount(): int
    {
        return $this->getNotesBeneficiariesCount() + $this->getWorkshopsBeneficiariesCount();
    }

    #[Groups('read')]
    public function getNotesBeneficiariesCount(): int
    {
        return array_reduce($this->notes->toArray(), fn (int $acc, Permanence $note) => $acc + $note->getNbBeneficiariesAccounts(), 0);
    }

    #[Groups('read')]
    public function getWorkshopsBeneficiariesCount(): int
    {
        return array_reduce($this->workshops->toArray(), fn (int $acc, Workshop $workshop) => $acc + $workshop->getNbBeneficiariesAccounts(), 0);
    }

    #[Groups('read')]
    public function getStoredDocumentsCount(): int
    {
        return $this->getWorkshopsStoredDocumentsCount() + $this->getNotesStoredDocumentsCount();
    }

    #[Groups('read')]
    public function getWorkshopsStoredDocumentsCount(): int
    {
        return array_reduce($this->workshops->toArray(), fn (int $acc, Workshop $workshop) => $acc + $workshop->getNbStoredDocs(), 0);
    }

    #[Groups('read')]
    public function getNotesStoredDocumentsCount(): int
    {
        return array_reduce($this->notes->toArray(), fn (int $acc, Permanence $note) => $acc + $note->getNbStoredDocs(), 0);
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

    /** @return Collection<int, Workshop> */
    public function getWorkshops(): Collection
    {
        return $this->workshops;
    }

    public function addWorkshop(Workshop $workshop): self
    {
        if (!$this->workshops->contains($workshop)) {
            $this->workshops->add($workshop);
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
