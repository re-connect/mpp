import {
  Container,
  Divider,
  Fab,
  Typography
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import AddIcon from '@material-ui/icons/Add';
import React, { useContext } from 'react';
import { useNumber } from 'react-hanger/array';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NotesContext from '../../Context/NotesContext';
import { centersEndpoint, notesEndpoint, paginationCount } from '../../Services/requests';
import Note from './Note';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import UseFetchData from '../../Hooks/UseFetchData';
import { Center } from '../../Types/Center';
import HomeButton from '../../Components/HomeButton';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

const LeftTopContent = styled.div`
  position: absolute;
  left: 140px;
  top: 10px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const NotesTitle = styled(Typography)`
  flex: 1;
`;

const TopRightIcon = styled(Fab)``;

const Notes = withRouter(({history, match}: any) => {
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

  return (
    <Container maxWidth='sm'>
      <LeftTopContent>
        <HomeButton/>
      </LeftTopContent>
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
        <Divider/>
        <NotesTitle variant='h4' gutterBottom color='textPrimary'>
          Permanences CFN
        </NotesTitle>
        {center === null ? null : (
          <TopRightIcon
            size='medium'
            color='primary'
            aria-label='add'
            onClick={() => history.push(`/centers/${center.id}/create-note`)}
          >
            <AddIcon/>
          </TopRightIcon>
        )}
        <PaginationContainer>
          <Pagination
            count={Math.ceil(notesCount / paginationCount)}
            variant="outlined"
            page={currentPage}
            onChange={(event: any, value: any) => currentPageActions.setValue(value)}
          />
        </PaginationContainer>
        {notes.map((note: any) => (
          <Note note={note} key={note.id}/>
        ))}
      </StyledContent>
    </Container>
  );
});

export default Notes;
