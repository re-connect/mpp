import {Container, Divider, Fab, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '@mui/material/Pagination';
import React, {useContext} from 'react';
import {useNumber} from 'react-hanger/array';
import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import WorkshopsContext from '../../Context/WorkshopsContext';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import UseQueryParams from '../../Hooks/UseQueryParams';
import {centersEndpoint, paginationCount, workshopsEndpoint} from '../../Services/requests';
import {Center} from '../../Types/Center';
import Workshop from './Workshop';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

const WorkshopsTitle = styled(Typography)`
  flex: 1;
`;

const TopRightIcon = styled(Fab)``;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Workshops = () => {
  const [center, setCenter] = React.useState<Center | null>(null);
  const navigate = useNavigate();
  const {centerId} = useParams<{ centerId: string | undefined }>();
  const {workshops, setWorkshops} = useContext(WorkshopsContext);
  const [workshopsCount, workshopsCountActions] = useNumber(0);
  const pagesCount = Math.ceil(workshopsCount / paginationCount);
  const pageNumberParam = UseQueryParams().get('page');
  const pageNumber = null === pageNumberParam ? 1 : pageNumberParam;

  UseFetchDataEffect((`${centersEndpoint}/${centerId}`), setCenter);
  UseFetchDataEffect((`${workshopsEndpoint}?center=${centerId}&page=${pageNumber}`), (data: any) => {
    setWorkshops(data['hydra:member']);
    workshopsCountActions.setValue(data['hydra:totalItems'])
  });

  const changePage = async (event: any, value: any) => {
    navigate(`/centers/${centerId}/workshops?page=${null === value ? '1' : value}`)
  }

  return (
    <Container maxWidth='sm'>
      {center === null ? null : (
        <StyledContent>
          <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
            {center.name}
          </WorkshopsTitle>
          <Typography>Nb d'ateliers : {!center.workshops ? 0 : center.workshops.length}</Typography>
          <Typography>Nb CFN crées : {center.workshopsBeneficiariesCount ?? 0}</Typography>
          <Typography>Nb docs stockés : {center.workshopsStoredDocumentsCount ?? 0}</Typography>
        </StyledContent>
      )}
      <Divider/>
      <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
        Accompagnements numérique
      </WorkshopsTitle>
      {center === null ? null : (
        <TopRightIcon
          size='medium'
          color='primary'
          aria-label='add'
          onClick={() => navigate(`/centers/${center.id}/create-workshop`)}
        >
          <AddIcon/>
        </TopRightIcon>
      )}
      <PaginationContainer>
        <Pagination
          count={pagesCount}
          variant="outlined"
          page={parseInt(pageNumber as string)} onChange={changePage}
        />
      </PaginationContainer>
      {workshops.map((workshop: any) => (
        <Workshop key={workshop['@id']} workshop={workshop}/>
      ))}
    </Container>
  );
};

export default Workshops;
