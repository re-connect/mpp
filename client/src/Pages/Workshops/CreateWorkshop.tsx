import Container from '@material-ui/core/Container';
import React from 'react';
import { useParams } from 'react-router-dom';
import { centersEndpoint, workshopsEndpoint } from '../../Services/requests';
import WorkshopForm from './Components/WorkshopForm';
import UseFetchData from "../../Hooks/UseFetchData";

const CreateWorkshop = () => {
  const {centerId} = useParams();
  const workshop = {
    center: `${centersEndpoint}/${centerId}`,
    date: new Date(),
    skills: [],
    nbParticipants: 0,
    nbBeneficiariesAccounts: 0,
    nbStoredDocs: 0,
    nbCreatedEvents: 0,
    nbCreatedContacts: 0,
    nbCreatedNotes: 0,
  }
  const createWorkshop = UseFetchData(workshopsEndpoint, null, 'POST');

  return (
    <Container maxWidth='sm'>
      <WorkshopForm workshop={workshop} onSubmit={createWorkshop}/>
    </Container>
  )
}

export default CreateWorkshop;