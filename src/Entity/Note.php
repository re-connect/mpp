<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * A Note
 *
 * @ORM\Entity
 * @ApiResource(
 *     attributes={"access_control"="is_granted('ROLE_USER')"},
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"write"}}
 *     )
 * @ApiFilter(SearchFilter::class, properties={"center": "exact"})
 *
 */
class Note
{
    use TimestampableEntity;
    /**
     * @var int The id of this note.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var DateTime
     * @Groups({"read", "write"})
     * @ORM\Column(name="date", type="date", nullable=true)
     */
    private $date;

    /**
     * @var integer
     * @Groups({"read", "write"})
     * @ORM\Column(name="hours", type="integer")
     */
    private $hours;

    /**
     * @var integer
     * @Groups({"read", "write"})
     * @ORM\Column(name="nb_pros", type="integer")
     */
    private $nbPros;

    /**
     * @var integer
     * @Groups({"read", "write"})
     * @ORM\Column(name="nb_pro_accounts", type="integer")
     */
    private $nbProAccounts;

    /**
     * @var integer
     * @Groups({"read", "write"})
     * @ORM\Column(name="nb_beneficiaries", type="integer")
     */
    private $nbBeneficiaries;

    /**
     * @var integer
     * @Groups({"read", "write"})
     * @ORM\Column(name="nb_beneficiaries_accounts", type="integer")
     */
    private $nbBeneficiariesAccounts;

    /**
     * @var integer
     * @Groups({"read", "write"})
     * @ORM\Column(name="nb_stored_docs", type="integer")
     */
    private $nbStoredDocs;

    /**
     * @var string
     * @Groups({"read", "write"})
     * @ORM\Column(name="beneficiaries_notes", type="text")
     */
    private $beneficiariesNotes;
    /**
     * @var string
     * @Groups({"read", "write"})
     * @ORM\Column(name="pro_notes", type="text")
     */
    private $proNotes;
    /**
     * @var string
     * @Groups({"read", "write"})
     * @ORM\Column(name="reconnect_notes", type="text")
     */
    private $reconnectNotes;

    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="notes")
     */
    private $author;

    /**
     * @var Center
     * @Groups({"write"})
     * @ORM\ManyToOne(targetEntity="App\Entity\Center", inversedBy="notes")
     */
    private $center;

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
    public function getDate(): ?DateTime
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
     * @param Center $center
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
     * @param int $hours
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
     * @param int $nbPros
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
     * @param int $nbProAccounts
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
     * @param int $nbBeneficiaries
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
     * @param int $nbBeneficiariesAccounts
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
     * @param int $nbStoredDocs
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
     * @param string $beneficiariesNotes
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
     * @param string $proNotes
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
     * @param string $reconnectNotes
     */
    public function setReconnectNotes(string $reconnectNotes = null): void
    {
        $this->reconnectNotes = $reconnectNotes;
    }
}