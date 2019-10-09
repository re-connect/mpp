<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * A Center
 *
 * @ORM\Entity
 * @ApiResource(attributes={"access_control"="is_granted('ROLE_USER')"})
 *
 */
class Center
{
    /**
     * @var int The id of this person.
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string.
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    public $name;

    /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity="App\Entity\Note", mappedBy="center")
     */
    private $notes;

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->notes = new ArrayCollection();
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
     * @param Note $note
     *
     * @return $this
     */
    public function addNote(Note $note)
    {
        $this->notes[] = $note;

        return $this;
    }

    /**
     * @param Note $note
     *
     * @return $this
     */
    public function removeNote(Note $note)
    {
        $this->notes->removeElement($note);

        return $this;
    }
}