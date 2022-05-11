import { Container, Divider, Fab, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Pagination from '@material-ui/lab/Pagination';
import React, { useContext } from 'react';
import { useNumber } from 'react-hanger/array';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import WorkshopsContext from '../../Context/WorkshopsContext';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import UseQueryParams from '../../Hooks/UseQueryParams';
import { centersEndpoint, paginationCount, workshopsEndpoint } from '../../Services/requests';
import { Center } from '../../Types/Center';
import Workshop from './Workshop';
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
  const history = useHistory();
  const {centerId} = useParams<{ centerId: string|undefined }>();
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
    history.push(`/centers/${centerId}/workshops?page=${null === value ? '1' : value}`)
  }

  return (
    <Container maxWidth='sm'>
      <LeftTopContent>
        <HomeButton/>
      </LeftTopContent>
      {center === null ? null : (
        <StyledContent>
          <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
            {center.name}
          </WorkshopsTitle>
          <Typography>Nb d'ateliers : {!center.workshops ? 0 : center.workshops.length}</Typography>
          <Typography>Nb CFN crées : {!center.createdBeneficiaryCount ? 0 : center.createdBeneficiaryCount}</Typography>
          <Typography>Nb docs stockés : {!center.documentsCount ? 0 : center.documentsCount}</Typography>
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
          onClick={() => history.push(`/centers/${center.id}/create-workshop`)}
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
