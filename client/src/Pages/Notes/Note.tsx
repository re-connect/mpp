import { Avatar, Card, CardContent, Chip, Fab, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import { getIdFromIri } from '../../Services/helpers';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const EditNote = styled(Fab)`
  position: absolute !important;
  right: 10px;
  top: 10px;
`;

const StyledChip = styled(Chip)`
  margin: 8px;
`;

const Note = (({note}: any) => {
  const navigate = useNavigate();

  return (
    <StyledCard key={note.id} variant={"outlined"}>
      <CardContent style={{position: 'relative', backgroundColor: '#212121'}}>
        <EditNote
          size='small'
          color='primary'
          aria-label='add'
          onClick={() => navigate(`/note/${getIdFromIri(note['@id'])}/edit`)}
        >
          <EditIcon/>
        </EditNote>
        <Typography color='textPrimary' gutterBottom>
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
        <Typography variant="subtitle1">
          Genres :
        </Typography>
        <Typography variant="body2">
          [ Femmes : {note.femaleCount} ] [ Hommes : {note.maleCount} ] [ Autres : {note.noGenderCount} ]
        </Typography>
        <br/>
        <Typography variant='subtitle1'>Remarques concernant les bénéficiaires :</Typography>
        <Typography variant='body2' component='p'>
          {note.beneficiariesNotes}
        </Typography>
        <br/>
        <Typography variant='subtitle1'>Remarques concernant les professionnels :</Typography>
        <Typography variant='body2' component='p'>
          {note.proNotes}
        </Typography>
        <br/>
        <Typography variant='subtitle1'>Remarques concernant Reconnect :</Typography>
        <Typography variant='body2' component='p'>
          {note.reconnectNotes}
        </Typography>
      </CardContent>
    </StyledCard>
  );
});

export default Note;
