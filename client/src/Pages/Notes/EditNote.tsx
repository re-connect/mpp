import Container from '@material-ui/core/Container';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import { buildEntityEndpoint, notesEndpoint } from '../../Services/requests';
import UseFetchData from '../../Hooks/UseFetchData';
import NoteForm from './Components/NoteForm';

const EditNote = () => {
  const {noteId} = useParams() as { noteId: string};
  const [note, setNote] = useState<any>(null);
  const entityUrl = !note ? '' : buildEntityEndpoint(note);

  UseFetchDataEffect(`${notesEndpoint}/${parseInt(noteId)}`, setNote);

  const updateNote = UseFetchData(entityUrl, () => {}, 'PUT');

  return (
    <Container maxWidth='sm'>
      {null === note ? <></> : <NoteForm note={note} onSubmit={updateNote}/>}
    </Container>
  )
}

export default EditNote;
