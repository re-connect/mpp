import Container from '@material-ui/core/Container';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import { workshopsEndpoint } from '../../Services/requests';
import { WorkshopInterface } from '../../Types/Workshops';
import EditWorkshopForm from './Components/EditWorkshopForm';

const EditWorkshop = () => {
  const {workshopId} = useParams();
  const [workshop, setWorkshop] = useState<WorkshopInterface|null>(null);

  UseFetchDataEffect(`${workshopsEndpoint}/${parseInt(workshopId)}`, setWorkshop);

  return (
    <Container maxWidth='sm'>
        {null === workshop ? <></> : <EditWorkshopForm workshop={workshop} />}
    </Container>
  )
}

export default EditWorkshop;
