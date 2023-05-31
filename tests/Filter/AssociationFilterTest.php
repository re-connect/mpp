<?php

namespace App\Tests\Filter;

use App\Filter\AssociationFilter;
use PHPUnit\Framework\TestCase;

class AssociationFilterTest extends TestCase
{
    public function testFilterPropertiesAreCorrectlySet(): void
    {
        $reflector = new \ReflectionClass(AssociationFilter::class);
        $property = $reflector->getProperty('associations');

        $filter = AssociationFilter::new('association1.association2.property', 'label');

        $this->assertEquals('property', $filter->getAsDto()->getProperty());
        $this->assertEquals(['association1', 'association2'], $property->getValue($filter));
        $this->assertEquals('label', $filter->getAsDto()->getLabel());
    }

    public function testCanNotCreateFilterWithNoAssociation(): void
    {
        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('Illegal number of properties');
        AssociationFilter::new('property');
    }
}
