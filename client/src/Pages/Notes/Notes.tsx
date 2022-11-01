import {Container, Fab} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import AddIcon from '@mui/icons-material//Add';
import React, {useContext} from 'react';
import {useNumber} from 'react-hanger/array';
import styled from 'styled-components';
import NotesContext from '../../Context/NotesContext';
import {centersEndpoint, notesEndpoint, paginationCount} from '../../Services/requests';
import Note from './Note';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import UseFetchData from '../../Hooks/UseFetchData';
import {Center} from '../../Types/Center';
import {useNavigate, useParams} from 'react-router-dom';
import Title from "../../Components/Title";
import CenterHeader from "../../Components/CenterHeader";
import Stack from "@mui/material/Stack";

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

const TopRightIcon = styled(Fab)``;

const Notes = () => {
  const [notesCount, notesCountActions] = useNumber(0);
  const [currentPage, currentPageActions] = useNumber(1);
  const navigate = useNavigate();
  const {centerId} = useParams<{ centerId: string | undefined }>();
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
      <Stack>
        <CenterHeader center={center}/>
        <Title text="Permanences CFN" variant="h4"/>
        {center === null ? null : (
          <TopRightIcon
            size='medium'
            color='primary'
            aria-label='add'
            onClick={() => navigate(`/centers/${center.id}/create-note`)}
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
      </Stack>
    </Container>
  );
};

export default Notes;
