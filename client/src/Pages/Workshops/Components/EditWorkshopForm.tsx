import React from 'react';
import {useParams} from 'react-router-dom';

const EditWorkshopForm = () => {
  const {workshopId} = useParams();

  return (
    <div>Page d'édition de l'atelier n°{workshopId}</div>
  )
}

export default EditWorkshopForm;
