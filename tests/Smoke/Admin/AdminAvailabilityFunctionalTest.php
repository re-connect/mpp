<?php

namespace App\Tests\Smoke\Admin;

use App\Controller\Admin\AgeBreakpointCrudController;
use App\Controller\Admin\CenterCrudController;
use App\Controller\Admin\CenterTagCrudController;
use App\Controller\Admin\DurationCrudController;
use App\Controller\Admin\EquipmentSupplierCrudController;
use App\Controller\Admin\ParticipantKindCrudController;
use App\Controller\Admin\PermanenceCrudController;
use App\Controller\Admin\SkillCrudController;
use App\Controller\Admin\TopicCrudController;
use App\Controller\Admin\UsedEquipmentCrudController;
use App\Controller\Admin\WorkshopCrudController;
use App\Tests\AuthenticatedTestCase;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;

class AdminAvailabilityFunctionalTest extends AuthenticatedTestCase
{
    private KernelBrowser $client;
    private AdminUrlGenerator $urlGenerator;

    protected function setUp(): void
    {
        $this->ensureKernelShutdown();
        $this->client = self::createClient();
        $this->urlGenerator = $this->getContainer()->get(AdminUrlGenerator::class);
        parent::setUp();
    }

    /**
     * @dataProvider adminUrlsProvider
     *
     * @param string[] $actions
     */
    public function testAdminPageIsSuccessful(string $controllerClass, array $actions): void
    {
        $this->login($this->client, 'admin_user@mail.com');
        foreach ($actions as $action) {
            $this->client->request(
                'GET',
                $this->buildAdminUrl(
                    $controllerClass,
                    $action,
                ),
            );
            $this->assertLessThan(400, $this->client->getResponse()->getStatusCode());
        }
    }

    public function adminUrlsProvider(): \Generator
    {
        yield [PermanenceCrudController::class, [Crud::PAGE_INDEX]];
        yield [WorkshopCrudController::class, [Crud::PAGE_INDEX]];
    }

    /**
     * @dataProvider SuperAdminUrlsProvider
     *
     * @param string[] $actions
     */
    public function testAdminCanNotSeeSuperAdminPage(string $controllerClass, array $actions): void
    {
        $this->login($this->client, 'admin_user@mail.com');
        foreach ($actions as $action) {
            $this->client->request(
                'GET',
                $this->buildAdminUrl(
                    $controllerClass,
                    $action,
                ),
            );
            $this->assertEquals(403, $this->client->getResponse()->getStatusCode());
        }
    }

    /**
     * @dataProvider SuperAdminUrlsProvider
     *
     * @param string[] $actions
     */
    public function testSuperAdminPageIsSuccessful(string $controllerClass, array $actions): void
    {
        $this->login($this->client, 'super_admin_user@mail.com');
        foreach ($actions as $action) {
            $this->client->request(
                'GET',
                $this->buildAdminUrl(
                    $controllerClass,
                    $action,
                ),
            );
            $this->assertLessThan(400, $this->client->getResponse()->getStatusCode());
        }
    }

    public function SuperAdminUrlsProvider(): \Generator
    {
        yield [CenterCrudController::class, [Crud::PAGE_INDEX]];
        yield [CenterTagCrudController::class, [Crud::PAGE_INDEX]];
        yield [TopicCrudController::class, [Crud::PAGE_INDEX]];
        yield [SkillCrudController::class, [Crud::PAGE_INDEX]];
        yield [AgeBreakpointCrudController::class, [Crud::PAGE_INDEX]];
        yield [DurationCrudController::class, [Crud::PAGE_INDEX]];
        yield [ParticipantKindCrudController::class, [Crud::PAGE_INDEX]];
        yield [EquipmentSupplierCrudController::class, [Crud::PAGE_INDEX]];
        yield [UsedEquipmentCrudController::class, [Crud::PAGE_INDEX]];
    }

    private function buildAdminUrl(string $controllerClass, string $action): string
    {
        return $this->urlGenerator
            ->setController($controllerClass)
            ->setAction($action)
            ->generateUrl();
    }
}
