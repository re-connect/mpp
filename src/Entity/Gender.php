<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GenderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"write"}}
 * )
 * @ORM\Entity(repositoryClass=GenderRepository::class)
 */
class Gender
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private ?int $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read", "write"})
     */
    private ?string $name;

    /**
     * @ORM\ManyToMany(targetEntity=Workshop::class, mappedBy="genders")
     */
    private ?Collection $workshops;

    /**
     * @ORM\ManyToMany(targetEntity=Permanence::class, mappedBy="genders")
     */
    private ?Collection $permanences;

    public function __construct()
    {
        $this->workshops = new ArrayCollection();
        $this->permanences = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

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
            $workshop->addGender($this);
        }

        return $this;
    }

    public function removeWorkshop(Workshop $workshop): self
    {
        if ($this->workshops->removeElement($workshop)) {
            $workshop->removeGender($this);
        }

        return $this;
    }

    /**
     * @return Collection|Permanence[]
     */
    public function getPermanences(): Collection
    {
        return $this->permanences;
    }

    public function addPermanence(Permanence $permanence): self
    {
        if (!$this->permanences->contains($permanence)) {
            $this->permanences[] = $permanence;
            $permanence->addGender($this);
        }

        return $this;
    }

    public function removePermanence(Permanence $permanence): self
    {
        if ($this->permanences->removeElement($permanence)) {
            $permanence->removeGender($this);
        }

        return $this;
    }
}
