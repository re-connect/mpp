import { Container, Fab, Typography } from '@material-ui/core';
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
import { getIdFromIri } from '../../Services/helpers';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

const WorkshopsTitle = styled(Typography)`
  flex: 1;
`;

const TopRightIcon = styled(Fab)`
  position: absolute;
  right: 0;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Workshops = () => {
  const [center, setCenter] = React.useState<Center | null>(null);
  const history = useHistory();
  const {centerId} = useParams();
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

  const editWorkshop = (workshop: any) => {
    const workshopId = getIdFromIri(workshop['@id']);
    history.push(`/workshop/${workshopId}/edit`);
  }

  return (
    <Container maxWidth='sm'>
      {center === null ? null : (
        <StyledContent>
          <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
            {center.name}
          </WorkshopsTitle>
          <Typography>Nb d'ateliers : {!center.workshops ? 0 : center.workshops.length}</Typography>
        </StyledContent>
      )
      }
      <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
        Ateliers
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
        <Workshop key={workshop['@id']} workshop={workshop} editWorkshop={editWorkshop}/>
      ))}
    </Container>
  );
};

export default Workshops;
