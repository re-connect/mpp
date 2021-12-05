<?php

namespace App\Controller\Admin;

use App\Service\ExportService;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

abstract class ExportableCrudController extends AbstractCrudController
{
    private array $exportFields = [];
    private ExportService $exportsService;
    private AdminContextProvider $adminContextProvider;
    private FilterFactory $filterFactory;

    public function __construct(ExportService $exportsService, AdminContextProvider $adminContextProvider, FilterFactory $filterFactory, array $exportFields)
    {
        $this->exportsService = $exportsService;
        $this->exportFields = $exportFields;
        $this->adminContextProvider = $adminContextProvider;
        $this->filterFactory = $filterFactory;
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
