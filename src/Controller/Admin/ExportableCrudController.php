<?php

namespace App\Controller\Admin;

use App\Service\ExportService;
use App\Services\Statistics\AdminExportsService;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

abstract class ExportableCrudController extends AbstractCrudController
{
    private array $exportFields = [];
    private ExportService $exportsService;

    public function __construct(ExportService $exportsService, array $exportFields)
    {
        $this->exportsService = $exportsService;
        $this->exportFields = $exportFields;
    }

    public function export()
    {
        $context = $this->get(AdminContextProvider::class)->getContext();
        $exportFields = $this->exportsService->getExportFieldCollection($this->exportFields);
        $filters = $this->get(FilterFactory::class)->create($context->getCrud()->getFiltersConfig(), $exportFields, $context->getEntity());
        $queryBuilder = $this->createIndexQueryBuilder($context->getSearch(), $context->getEntity(), $exportFields, $filters);

        return $this->exportsService->export($queryBuilder->getQuery()->getResult(), $this->exportFields);
    }
}
