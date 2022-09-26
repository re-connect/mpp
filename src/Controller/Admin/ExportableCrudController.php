<?php

namespace App\Controller\Admin;

use App\Service\ExportService;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

abstract class ExportableCrudController extends AbstractCrudController
{
    public function __construct(private readonly ExportService $exportsService, private readonly AdminContextProvider $adminContextProvider, private readonly FilterFactory $filterFactory, private readonly array $exportFields)
    {
    }

    public function export()
    {
        $context = $this->adminContextProvider->getContext();
        $exportFields = $this->exportsService->getExportFieldCollection($this->exportFields);
        $filters = $this->filterFactory->create($context->getCrud()->getFiltersConfig(), $exportFields, $context->getEntity());
        $queryBuilder = $this->createIndexQueryBuilder($context->getSearch(), $context->getEntity(), $exportFields, $filters);

        return $this->exportsService->export($queryBuilder->getQuery()->getResult(), $this->exportFields);
    }
}
