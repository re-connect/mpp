import {Container, Fab} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import AddIcon from '@mui/icons-material//Add';
import React, {useContext} from 'react';
import {useNumber} from 'react-hanger/array';
import styled from 'styled-components';
import PermanencesContext from '../../Context/PermanencesContext';
import {centersEndpoint, paginationCount, permanencesEndpoint} from '../../Services/requests';
import Show from './Show';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import UseFetchData from '../../Hooks/UseFetchData';
import {Center} from '../../Types/Center';
import {useNavigate, useParams} from 'react-router-dom';
import Title from "../../Components/Title";
import CenterHeader from "../../Components/CenterHeader";
import Stack from "@mui/material/Stack";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const TopRightIcon = styled(Fab)``;

const List = () => {
  const [permanencesCount, permanencesCountActions] = useNumber(0);
  const [currentPage, currentPageActions] = useNumber(1);
  const navigate = useNavigate();
  const {centerId} = useParams<{ centerId: string | undefined }>();
  const {permanences, setPermanences} = useContext(PermanencesContext);
  const [center, setCenter] = React.useState<Center>({});

  UseFetchDataEffect(`${centersEndpoint}/${centerId}`, setCenter);
  const fetchPermanences = UseFetchData(`${permanencesEndpoint}?center=${centerId}&page=${currentPage}`, (data: any) => {
    permanencesCountActions.setValue(data['hydra:totalItems'])
    setPermanences(data['hydra:member']);
  });

  React.useEffect(() => {
    fetchPermanences();
  }, [fetchPermanences])

  return (
    <Container maxWidth='sm'>
      <Stack>
        <CenterHeader center={center}/>
        <Title text="List CFN" variant="h4"/>
        {center === null ? null : (
          <TopRightIcon
            size='medium'
            color='primary'
            aria-label='add'
            onClick={() => navigate(`/centers/${center.id}/create-permanence`)}
          >
            <AddIcon/>
          </TopRightIcon>
        )}
        <PaginationContainer>
          <Pagination
            count={Math.ceil(permanencesCount / paginationCount)}
            variant="outlined"
            page={currentPage}
            onChange={(event: any, value: any) => currentPageActions.setValue(value)}
          />
        </PaginationContainer>
        {permanences.map((note: any) => (
          <Show note={note} key={note.id}/>
        ))}
      </Stack>
    </Container>
  );
};

export default List;
