<?php

namespace App\Controller\Admin;

use App\Entity\ParticipantKind;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ParticipantKindCrudController extends AbstractCrudController
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
