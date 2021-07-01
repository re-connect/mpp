<?php

namespace App\Repository;

use App\Entity\CenterLabel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CenterLabel|null find($id, $lockMode = null, $lockVersion = null)
 * @method CenterLabel|null findOneBy(array $criteria, array $orderBy = null)
 * @method CenterLabel[]    findAll()
 * @method CenterLabel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CenterLabelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CenterLabel::class);
    }

    // /**
    //  * @return CenterLabel[] Returns an array of CenterLabel objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CenterLabel
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
