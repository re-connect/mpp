<?php

namespace App\Repository;

use App\Entity\AgeBreakpoint;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AgeBreakpoint|null find($id, $lockMode = null, $lockVersion = null)
 * @method AgeBreakpoint|null findOneBy(array $criteria, array $orderBy = null)
 * @method AgeBreakpoint[]    findAll()
 * @method AgeBreakpoint[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 *
 * @extends ServiceEntityRepository<AgeBreakpoint>
 */
class AgeBreakpointRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AgeBreakpoint::class);
    }

    // /**
    //  * @return AgeBreakpoint[] Returns an array of AgeBreakpoint objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AgeBreakpoint
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
