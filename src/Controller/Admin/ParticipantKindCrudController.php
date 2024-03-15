<?php

namespace App\Controller\Admin;

use App\Entity\ParticipantKind;

class ParticipantKindCrudController extends AbstractSuperAdminController
{
    public static function getEntityFqcn(): string
    {
        return ParticipantKind::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
