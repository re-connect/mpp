<?php

namespace App\Repository;

use App\Entity\EquipmentSupplier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EquipmentSupplier|null find($id, $lockMode = null, $lockVersion = null)
 * @method EquipmentSupplier|null findOneBy(array $criteria, array $orderBy = null)
 * @method EquipmentSupplier[]    findAll()
 * @method EquipmentSupplier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EquipmentSupplierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EquipmentSupplier::class);
    }

    // /**
    //  * @return EquipmentSupplier[] Returns an array of EquipmentSupplier objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EquipmentSupplier
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
