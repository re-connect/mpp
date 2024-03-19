<?php

namespace App\Controller\Admin;

use App\Entity\Topic;

class TopicCrudController extends AbstractSuperAdminController
{
    public static function getEntityFqcn(): string
    {
        return Topic::class;
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
