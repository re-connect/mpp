import Container from '@mui/material/Container';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import {buildEntityEndpoint, workshopsEndpoint} from '../../Services/requests';
import {WorkshopInterface} from '../../Types/Workshops';
import WorkshopForm from './Components/WorkshopForm';
import UseFetchData from '../../Hooks/UseFetchData';

const EditWorkshop = () => {
  const {workshopId} = useParams() as { workshopId: string };
  const [workshop, setWorkshop] = useState<WorkshopInterface | null>(null);
  const entityUrl = !workshop ? '' : buildEntityEndpoint(workshop);

  UseFetchDataEffect(`${workshopsEndpoint}/${parseInt(workshopId)}`, setWorkshop);
  const updateWorkshop = UseFetchData(entityUrl, () => {
  }, 'PUT');

  if (!workshop) return null;

  return (
    <Container maxWidth='sm'>
      <WorkshopForm workshop={workshop} onSubmit={updateWorkshop}/>
    </Container>
  )
}

export default EditWorkshop;
