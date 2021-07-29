import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import {format} from 'date-fns';
import React, {useCallback, useContext, useEffect} from 'react';
import {useBoolean} from 'react-hanger';
import {useNumber} from 'react-hanger/array';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import superagent, {Response} from 'superagent';
import NotesContext from '../../Context/NotesContext';
import {centersEndpoint, notesEndpoint} from '../../Services/requests';
import CreateNoteForm from './Components/CreateNoteForm';
import EditNoteForm from './Components/EditNoteForm';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
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

const EditNote = styled(Fab)`
  position: absolute !important;
  right: 10px;
  top: 10px;
`;

const StyledChip = styled(Chip)`
  margin: 8px;
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
  const [center, setCenter] = React.useState(initialCenter);
  const notesContext = useContext(NotesContext);
  const {centerId} = match.params;

  const fetchNotes = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      superagent
        .get(`${notesEndpoint}?center=${centerId}`)
        .set('Authorization', `Bearer ${token}`)
        .then((response: Response) => {
          notesContext.set(response.body);
        });
    } else {
      history.push('/login');
    }
  }, [history, centerId]);

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
        <NotesTitle variant='h4' gutterBottom color='textSecondary'>
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
            <NotesTitle variant='h4' gutterBottom color='textSecondary'>
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
        {notesContext.list.map((note: any) => (
          <StyledCard key={note.id}>
            <CardContent style={{position: 'relative', backgroundColor: '#212121'}}>
              <EditNote
                size='small'
                color='primary'
                aria-label='add'
                onClick={() => editNote(note.id)}
              >
                <EditIcon/>
              </EditNote>
              <Typography color='textSecondary' gutterBottom>
                Date : {format(new Date(note.date), 'dd-MM-yyyy')}
              </Typography>
              <Typography variant='body2' component='p'>
                Durée : {note.hours} h
              </Typography>
              {!note.attendees ? null : (
                <Typography variant='body2' component='p'>
                  Participants : {note.attendees}
                </Typography>
              )}
              {!note.place ? null : (
                <Typography variant='body2' component='p'>
                  Lieu : {note.place}
                </Typography>
              )}
              <StyledChip
                avatar={<Avatar>{note.nbPros}</Avatar>}
                label='Professionnels rencontrés'
              />
              <StyledChip
                avatar={<Avatar>{note.nbProAccounts}</Avatar>}
                label='Comptes pro crées'
              />
              <StyledChip
                avatar={<Avatar>{note.nbBeneficiaries}</Avatar>}
                label='Bénéficiaires rencontrés'
              />
              <StyledChip
                avatar={<Avatar>{note.nbBeneficiariesAccounts}</Avatar>}
                label='Comptes bénéficiaires crées'
              />
              <StyledChip avatar={<Avatar>{note.nbStoredDocs}</Avatar>} label='Documents stockés'/>
              <Typography variant='subtitle1'>Remarques concernant les bénéficiaires</Typography>
              <Typography variant='body2' component='p'>
                {note.beneficiariesNotes}
              </Typography>
              <Typography variant='subtitle1'>Remarques concernant les professionnels</Typography>
              <Typography variant='body2' component='p'>
                {note.proNotes}
              </Typography>
              <Typography variant='subtitle1'>Remarques concernant Reconnect</Typography>
              <Typography variant='body2' component='p'>
                {note.reconnectNotes}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </StyledContent>
    </Container>
  );
});

export default Notes;
