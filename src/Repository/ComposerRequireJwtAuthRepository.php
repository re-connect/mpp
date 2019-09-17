<?php

namespace App\Repository;

use App\Entity\ComposerRequireJwtAuth;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ComposerRequireJwtAuth|null find($id, $lockMode = null, $lockVersion = null)
 * @method ComposerRequireJwtAuth|null findOneBy(array $criteria, array $orderBy = null)
 * @method ComposerRequireJwtAuth[]    findAll()
 * @method ComposerRequireJwtAuth[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ComposerRequireJwtAuthRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ComposerRequireJwtAuth::class);
    }

    // /**
    //  * @return ComposerRequireJwtAuth[] Returns an array of ComposerRequireJwtAuth objects
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
    public function findOneBySomeField($value): ?ComposerRequireJwtAuth
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
