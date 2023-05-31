<?php

namespace App\Filter;

use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Contracts\Filter\FilterInterface;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\FieldDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\FilterDataDto;
use EasyCorp\Bundle\EasyAdminBundle\Filter\FilterTrait;

class AssociationFilter implements FilterInterface
{
    use FilterTrait;

    /** @var array<string> */
    private array $associations;

    public static function new(string $propertyName, string $label = null): self
    {
        $properties = explode('.', $propertyName);

        if (2 > count($properties)) {
            throw new \Exception('Illegal number of properties');
        }

        return (new self())
            ->setAssociations(array_slice($properties, 0, count($properties) - 1))
            ->setFilterFqcn(self::class)
            ->setProperty(end($properties))
            ->setLabel($label);
    }

    /** @param array<string> $associations */
    public function setAssociations(array $associations): self
    {
        $this->associations = $associations;

        return $this;
    }

    public function apply(QueryBuilder $queryBuilder, FilterDataDto $filterDataDto, ?FieldDto $fieldDto, EntityDto $entityDto): void
    {
        $entityAlias = $filterDataDto->getEntityAlias();
        $associationAlias = $entityAlias;
        foreach ($this->associations as $association) {
            $associationAlias = $association;
            $queryBuilder
                ->leftJoin(sprintf('%s.%s', $entityAlias, $association), $associationAlias);
            $entityAlias = $association;
        }

        $queryBuilder
            ->andWhere(sprintf('%s.%s = :value', $associationAlias, $filterDataDto->getProperty()))
            ->setParameter('value', $filterDataDto->getValue());
    }
}
