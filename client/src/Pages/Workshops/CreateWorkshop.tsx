import Container from '@mui/material/Container';
import React from 'react';
import {useParams} from 'react-router-dom';
import {centersEndpoint, workshopsEndpoint} from '../../Services/requests';
import WorkshopForm from './Components/WorkshopForm';
import UseFetchData from '../../Hooks/UseFetchData';
import Page from "../../Components/Page";

const CreateWorkshop = () => {
  const {centerId} = useParams<{ centerId: string | undefined }>();
  const workshop = {
    center: `${centersEndpoint}/${centerId}`,
    date: new Date(),
    skills: [],
    nbBeneficiariesAccounts: 0,
    nbStoredDocs: 0,
    nbCreatedEvents: 0,
    nbCreatedContacts: 0,
    nbCreatedNotes: 0,
  }
  const createWorkshop = UseFetchData(workshopsEndpoint, () => {
  }, 'POST');

  return (
    <Page>
      <Container maxWidth='sm'>
        <WorkshopForm workshop={workshop} onSubmit={createWorkshop}/>
      </Container>
    </Page>
  )
}

export default CreateWorkshop;
