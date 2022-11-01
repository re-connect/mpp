import React from 'react';
import {centersEndpoint, permanencesEndpoint} from '../../Services/requests';
import {useParams} from 'react-router-dom';
import UseFetchData from '../../Hooks/UseFetchData';
import Container from '@mui/material/Container';
import Form from './Components/Form';

const Create = () => {
  const {centerId} = useParams<{ centerId: string | undefined }>();
  const note = {
    center: `${centersEndpoint}/${centerId}`,
    date: new Date(),
    hours: 0,
    attendees: '',
    place: '',
    nbPros: 0,
    nbProAccounts: 0,
    nbBeneficiaries: 0,
    nbBeneficiariesAccounts: 0,
    nbStoredDocs: 0,
    beneficiariesNotes: '',
    proNotes: '',
    reconnectNotes: '',
  }

  const createPermanence = UseFetchData(permanencesEndpoint, () => {
  }, 'POST');

  return (
    <Container maxWidth='sm'>
      <Form note={note} onSubmit={createPermanence}/>
    </Container>
  )

}

export default Create;
