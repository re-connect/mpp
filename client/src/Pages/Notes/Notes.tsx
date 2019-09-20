import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import superagent, { Response } from 'superagent';
import CreateNoteForm from './Components/CreateNoteForm';
const apiEndpoint = 'http://localhost:8000/api';
const notesEndpoint = '/notes';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const Notes = withRouter(({ history, match }: any) => {
  const [notes, setNotes] = useState<any[]>([]);
  const { personId } = match.params;
  const fetchNotes = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      superagent
        .get(`${apiEndpoint}${notesEndpoint}?person=${personId}`)
        .set('Authorization', `Bearer ${token}`)
        .then((response: Response) => {
          setNotes(response.body);
        });
    } else {
      history.push('/login');
    }
  }, [history, personId]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);
  console.log(notes);

  return (
    <Container maxWidth='sm'>
      <StyledContent>
        <Typography variant='h2' gutterBottom>
          Notes
        </Typography>
        <CreateNoteForm personId={personId} />
        {notes.map((note: any) => (
          <StyledCard key={note.id}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                {format(new Date(note.date), 'dd-MM-yyyy')}
              </Typography>
              <Typography variant='h5' component='h2'>
                {note.title}
              </Typography>
              <Typography color='textSecondary'></Typography>
              <Typography variant='body2' component='p'>
                {note.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Actions</Button>
            </CardActions>
          </StyledCard>
        ))}
      </StyledContent>
    </Container>
  );
});

export default Notes;
