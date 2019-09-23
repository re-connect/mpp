import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { useBoolean } from 'react-hanger';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import superagent, { Response } from 'superagent';
import { notesEndpoint } from '../../Services/requests';
import CreateNoteForm from './Components/CreateNoteForm';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  position: relative;
`;

const NotesTitle = styled(Typography)`
  flex: 1;
`;

const Notes = withRouter(({ history, match }: any) => {
  const isModalOpen = useBoolean(false);

  const [notes, setNotes] = useState<any[]>([]);
  const { personId } = match.params;
  const fetchNotes = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      superagent
        .get(`${notesEndpoint}?person=${personId}`)
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

  return (
    <Container maxWidth='sm'>
      <Dialog fullScreen open={isModalOpen.value} onClose={isModalOpen.setFalse} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <CreateNoteForm personId={personId} />
        </DialogContent>
        <DialogActions>
          <Button onClick={isModalOpen.setFalse} color='primary'>
            Cancel
          </Button>
          <Button onClick={isModalOpen.setFalse} color='primary'>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>

      <StyledContent>
        <Header>
          <NotesTitle variant='h2' gutterBottom color='textSecondary'>
            Notes
          </NotesTitle>
          <Fab size='medium' color='primary' aria-label='add' onClick={isModalOpen.setTrue}>
            <AddIcon />
          </Fab>
        </Header>
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
