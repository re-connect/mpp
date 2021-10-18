import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  Typography
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import AddIcon from '@material-ui/icons/Add';
import React, {useCallback, useContext, useEffect} from 'react';
import {useBoolean} from 'react-hanger';
import {useNumber} from 'react-hanger/array';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import superagent, {Response} from 'superagent';
import NotesContext from '../../Context/NotesContext';
import {centersEndpoint, notesEndpoint, paginationCount} from '../../Services/requests';
import CreateNoteForm from './Components/CreateNoteForm';
import EditNoteForm from './Components/EditNoteForm';
import Note from './Note';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Header = styled.div`
  display: flex;
  position: relative;
`;

const NotesTitle = styled(Typography)`
  flex: 1;
`;

const HeaderContent = styled(Header)`
  position: relative;
  align-self: stretch;
  flex: 1;
`;

const AddNoteIcon = styled(Fab)`
  position: absolute;
  right: 0;
`;

const initialCenter = {
  name: '',
  notes: [],
  beneficiaryCount: '',
  createdBeneficiaryCount: '',
  documentsCount: '',
};

const Notes = withRouter(({history, match}: any) => {
  const isModalOpen = useBoolean(false);
  const isEditModalOpen = useBoolean(false);
  const [idNoteBeingEdited, noteIdActions] = useNumber(0);
  const [notesCount, notesCountActions] = useNumber(0);
  const [currentPage, currentPageActions] = useNumber(1);
  const [center, setCenter] = React.useState(initialCenter);
  const {centerId} = match.params;
  const notesContext = useContext(NotesContext);

  const fetchNotes = useCallback((page: number = 1) => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      superagent
        .get(`${notesEndpoint}?center=${centerId}&page=${page}`)
        .set('Authorization', `Bearer ${token}`)
        .then((response: Response) => {
          notesCountActions.setValue(response.body['hydra:totalItems'])
          notesContext.set(response.body['hydra:member']);
        });
    } else {
      history.push('/login');
    }
  }, [centerId, history]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes, centerId]);

  const fetchCenter = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      superagent
        .get(`${centersEndpoint}/${centerId}`)
        .set('Authorization', `Bearer ${token}`)
        .then((response: Response) => {
          setCenter(response.body);
        });
    } else {
      history.push('/login');
    }
  }, [history, centerId]);

  useEffect(() => {
    fetchCenter();
  }, [fetchCenter, centerId]);

  const editNote = (id: number) => {
    noteIdActions.setValue(id);
    isEditModalOpen.setTrue();
  };

  const changePage = (event: any, value: any) => {
    currentPageActions.setValue(value);
    fetchNotes(value);
  }

  return (
    <Container maxWidth='sm'>
      <Dialog
        fullScreen
        open={isModalOpen.value}
        onClose={isModalOpen.setFalse}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Créer une note</DialogTitle>
        <DialogContent>
          <CreateNoteForm centerId={centerId} closeModal={isModalOpen.setFalse}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={isModalOpen.setFalse} color='primary'>
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullScreen
        open={isEditModalOpen.value}
        onClose={isEditModalOpen.setFalse}
        aria-labelledby='edit-note'
      >
        <DialogTitle id='edit-note'>Modifier la note</DialogTitle>
        <DialogContent>
          <EditNoteForm
            centerId={centerId}
            note={notesContext.list.find(note => note.id === idNoteBeingEdited)}
            closeModal={isEditModalOpen.setFalse}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={isEditModalOpen.setFalse} color='primary'>
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
      <StyledContent>
        <NotesTitle variant='h4' gutterBottom color='textPrimary'>
          {center.name}
        </NotesTitle>
        <Typography>Nb permanences: {center.notes.length}</Typography>
        <Typography>Nb bénef rencontrés: {center.beneficiaryCount}</Typography>
        <Typography>Nb CFN crées: {center.createdBeneficiaryCount}</Typography>
        <Typography>Nb docs stockés: {center.documentsCount}</Typography>
        <br/>
        <Header>
          <Divider/>
          <HeaderContent>
            <Divider/>
            <NotesTitle variant='h4' gutterBottom color='textPrimary'>
              Permanences
            </NotesTitle>
            <AddNoteIcon
              size='medium'
              color='primary'
              aria-label='add'
              onClick={isModalOpen.setTrue}
            >
              <AddIcon/>
            </AddNoteIcon>
          </HeaderContent>
        </Header>
        <PaginationContainer>
          <Pagination
            count={Math.ceil(notesCount / paginationCount)}
            variant="outlined"
            page={currentPage} onChange={changePage}
          />
        </PaginationContainer>
        {notesContext.list.map((note: any) => (
          <Note note={note} key={note.id} editNote={editNote}/>
        ))}
      </StyledContent>
    </Container>
  );
});

export default Notes;
