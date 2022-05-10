<?php

namespace App\Controller;

use ApiPlatform\Core\Api\IriConverterInterface;
use App\Repository\AgeBreakpointRepository;
use App\Repository\DurationRepository;
use App\Repository\EquipmentSupplierRepository;
use App\Repository\GenderRepository;
use App\Repository\ParticipantKindRepository;
use App\Repository\SkillRepository;
use App\Repository\TopicRepository;
use App\Repository\UsedEquipmentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DropdownsController extends AbstractController
{
    /**
     * @Route("/api/dropdowns", name="dropdowns")
     */
    public function index(
        IriConverterInterface       $iriGenerator,
        ParticipantKindRepository   $participantKindRepository,
        EquipmentSupplierRepository $equipmentSupplierRepository,
        AgeBreakpointRepository     $ageBreakpointRepository,
        UsedEquipmentRepository     $usedEquipmentRepository,
        TopicRepository             $topicRepository,
        SkillRepository             $skillRepository,
        DurationRepository          $durationRepository,
        GenderRepository            $genderRepository,
    ): Response {
        $dropdowns = [];
        $repositories = [
            'participantKinds' => $participantKindRepository,
            'topics' => $topicRepository,
            'equipmentSuppliers' => $equipmentSupplierRepository,
            'ageBreakpoints' => $ageBreakpointRepository,
            'usedEquipments' => $usedEquipmentRepository,
            'skills' => $skillRepository,
            'durations' => $durationRepository,
            'genders' => $genderRepository,
        ];

        foreach ($repositories as $key => $repository) {
            $values = [];
            foreach ($repository->findAll() as $item) {
                $values[$iriGenerator->getIriFromItem($item)] = $item;
            }
            $dropdowns[$key] = $values;
        }

        return $this->json($dropdowns);
    }
}
