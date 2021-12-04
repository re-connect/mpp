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
import React, { useContext } from 'react';
import { useBoolean } from 'react-hanger';
import { useNumber } from 'react-hanger/array';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NotesContext from '../../Context/NotesContext';
import { centersEndpoint, notesEndpoint, paginationCount } from '../../Services/requests';
import CreateNoteForm from './Components/CreateNoteForm';
import EditNoteForm from './Components/EditNoteForm';
import Note from './Note';
import UseFetchDataEffect from "../../Hooks/UseFetchDataEffect";
import UseFetchData from "../../Hooks/UseFetchData";
import { Center } from "../../Types/Center";

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

const HeaderContent = styled.div`
  position: relative;
  align-self: stretch;
  flex: 1;
`;

const AddNoteIcon = styled(Fab)`
  position: absolute;
  right: 0;
`;

const Notes = withRouter(({history, match}: any) => {
  const isModalOpen = useBoolean(false);
  const isEditModalOpen = useBoolean(false);
  const [idNoteBeingEdited, noteIdActions] = useNumber(0);
  const [notesCount, notesCountActions] = useNumber(0);
  const [currentPage, currentPageActions] = useNumber(1);
  const {centerId} = match.params;
  const {notes, setNotes} = useContext(NotesContext);
  const [center, setCenter] = React.useState<Center>({});

  UseFetchDataEffect(`${centersEndpoint}/${centerId}`, setCenter);
  const fetchNotes = UseFetchData(`${notesEndpoint}?center=${centerId}&page=${currentPage}`, (data: any) => {
    notesCountActions.setValue(data['hydra:totalItems'])
    setNotes(data['hydra:member']);
  });
  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes])

  const editNote = (id: number) => {
    noteIdActions.setValue(id);
    isEditModalOpen.setTrue();
  };

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
            note={notes.find(note => note.id === idNoteBeingEdited)}
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
        {!center ? null : (
          <>
            <NotesTitle variant='h4' gutterBottom color='textPrimary'>
              {center.name}
            </NotesTitle>
            <Typography>Nb permanences: {!center.notes ? 0 : center.notes.length}</Typography>
            <Typography>Nb bénef rencontrés: {center.beneficiaryCount}</Typography>
            <Typography>Nb CFN crées: {center.createdBeneficiaryCount}</Typography>
            <Typography>Nb docs stockés: {center.documentsCount}</Typography>
          </>
        )}
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
            page={currentPage}
            onChange={(event: any, value: any) => currentPageActions.setValue(value)}
          />
        </PaginationContainer>
        {notes.map((note: any) => (
          <Note note={note} key={note.id} editNote={editNote}/>
        ))}
      </StyledContent>
    </Container>
  );
});

export default Notes;
