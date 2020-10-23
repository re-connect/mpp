<?php

namespace App\Service;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Dto\FieldDto;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyAccess\PropertyAccessor;
use Symfony\Contracts\Translation\TranslatorInterface;

class ExportService
{
    private EntityManagerInterface $em;
    private PropertyAccessor $propertyAccessor;
    private TranslatorInterface $translator;

    public function __construct(EntityManagerInterface $em, TranslatorInterface $translator)
    {
        $this->em = $em;
        $this->propertyAccessor = PropertyAccess::createPropertyAccessor();
        $this->translator = $translator;
    }

    public function export(array $data, array $fields)
    {
        $response = new StreamedResponse();
        $translatedFields = array_map(function ($field) {
            $fieldParts = explode('.', $field);

            return $this->translator->trans(array_pop($fieldParts));
        }, $fields);
        $response->setCallback(function () use ($data, $fields, $translatedFields) {
            $handle = fopen('php://output', 'w+');
            fputcsv($handle, $translatedFields, ';');
            foreach ($data as $datum) {
                $values = [];
                foreach ($fields as $field) {
                    $fieldValue = $this->getFieldValue(explode('.', $field), $datum);
                    $values[] = $this->getFieldStringValue($fieldValue);
                }
                fputcsv($handle, $values, ';');
            }
            fclose($handle);
        });
        $response->headers->set('Content-Type', 'text/csv; charset=utf-8');
        $response->headers->set('Content-Disposition', 'attachment; filename="'.'export.csv');

        return $response;
    }

    private function getFieldValue(array $fieldParts, $datum)
    {
        $currentPart = array_shift($fieldParts);
        $currentValue = $this->propertyAccessor->getValue($datum, $currentPart);
        if (0 === count($fieldParts)) {
            return $currentValue;
        }

        if ($currentValue instanceof Collection) {
            if (0 === $currentValue->count()) {
                return '';
            }

            return $this->getFieldValue($fieldParts, $currentValue->first());
        }

        return $this->getFieldValue($fieldParts, $currentValue);
    }

    private function getFieldStringValue($fieldValue): string
    {
        if (is_string($fieldValue)) {
            return $fieldValue;
        } elseif (null === $fieldValue) {
            return $this->translator->trans('unfilled');
        } elseif (is_numeric($fieldValue)) {
            return (string) $fieldValue;
        } elseif (is_array($fieldValue)) {
            return implode(',', array_map(function ($element) {
                return $this->getFieldStringValue($element);
            }, $fieldValue));
        } elseif ($fieldValue instanceof Collection) {
            return implode(',', $fieldValue->map(function ($element) {
                return $this->getFieldStringValue($element);
            })->toArray());
        } elseif (is_bool($fieldValue)) {
            return $this->translator->trans($fieldValue ? 'yes' : 'no');
        } elseif ($fieldValue instanceof \DateTime) {
            return $fieldValue->format('d/m/Y');
        } elseif (is_object($fieldValue)) {
            if (method_exists($fieldValue, 'getName')) {
                return $fieldValue->getName();
            } elseif (method_exists($fieldValue, '__toString')) {
                return (string) $fieldValue;
            } elseif (method_exists($fieldValue, 'getId')) {
                return $fieldValue->getId();
            } else {
                return $this->translator->trans('field_format_unknown');
            }
        } else {
            return $this->translator->trans('field_format_unknown');
        }
    }

    public function getExportFieldCollection(array $fields): FieldCollection
    {
        $exportFields = FieldCollection::new([]);
        foreach ($fields as $field) {
            $fieldDto = new FieldDto();
            $fieldDto->setProperty($field);
            $exportFields->set($fieldDto);
        }

        return $exportFields;
    }
}
