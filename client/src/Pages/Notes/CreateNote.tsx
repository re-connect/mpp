import React from 'react';
import { centersEndpoint, notesEndpoint } from '../../Services/requests';
import { useParams } from 'react-router-dom';
import UseFetchData from '../../Hooks/UseFetchData';
import { Container } from '@material-ui/core';
import NoteForm from './Components/NoteForm';

const CreateNote = () => {
  const {centerId} = useParams<{ centerId: string|undefined }>();
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

  const createNote = UseFetchData(notesEndpoint, () => {}, 'POST');

  return (
    <Container maxWidth='sm'>
      <NoteForm note={note} onSubmit={createNote}/>
    </Container>
  )

}

export default CreateNote;
