<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TopicRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"write"}}
 * )
 */
#[ORM\Entity(repositoryClass: TopicRepository::class)]
class Topic implements \Stringable
{
    #[Groups(['read'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[Groups(['read', 'write'])]
    #[ORM\Column(type: 'string', length: 255)]
    private ?string $name = null;

    /**
     * @var Collection<int, Skill>
     */
    #[Groups(['write'])]
    #[ORM\OneToMany(targetEntity: Skill::class, mappedBy: 'topic')]
    private Collection $skills;

    #[ORM\ManyToMany(targetEntity: Workshop::class, inversedBy: 'topics')]
    private ?Collection $workshops;

    public function __construct()
    {
        $this->skills = new ArrayCollection();
        $this->workshops = new ArrayCollection();
    }

    #[Groups(['read'])]
    #[SerializedName('@id')]
    public function getIri()
    {
        return sprintf('/api/topics/%s', $this->getId());
    }

    public function __toString(): string
    {
        return (string) $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

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
            $skill->setTopic($this);
        }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        if ($this->skills->removeElement($skill)) {
            // set the owning side to null (unless already changed)
            if ($skill->getTopic() === $this) {
                $skill->setTopic(null);
            }
        }

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
        }

        return $this;
    }

    public function removeWorkshop(Workshop $workshop): self
    {
        $this->workshops->removeElement($workshop);

        return $this;
    }
}
