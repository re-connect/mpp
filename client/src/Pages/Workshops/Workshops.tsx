import React, { useContext, useEffect } from 'react';
import useFetchCenter from '../../Services/useFetchCenter';
import WorkshopsContext from '../../Context/WorkshopsContext';
import useFetchWorkshops from '../../Services/useFetchWorkshops';
import { useLocation, useParams } from 'react-router-dom';
import Workshop from './Workshop';
import {Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Typography} from '@material-ui/core';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import { useBoolean } from 'react-hanger';
import CreateWorkshopForm from './Components/CreateWorkshopForm';
import { useNumber } from 'react-hanger/array';
import Pagination from '@material-ui/lab/Pagination';
import { paginationCount } from '../../Services/requests';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

const WorkshopsTitle = styled(Typography)`
  flex: 1;
`;

const AddNoteIcon = styled(Fab)`
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
  const isModalOpen = useBoolean(false);
  const {centerId} = useParams();
  const {workshops} = useContext(WorkshopsContext);
  const {center, fetchCenter} = useFetchCenter();
  const fetchWorkshops = useFetchWorkshops();
  const [workshopsCount, workshopsCountActions] = useNumber(0);
  const [currentPage, currentPageActions] = useNumber(1);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const pageNumber = useQuery().get('page');

  useEffect(() => {
    fetchCenter(centerId)
  }, [fetchCenter, centerId]);

  useEffect(() => {
    fetchWorkshops(centerId, workshopsCountActions, pageNumber);
  }, [fetchWorkshops, centerId]);

  const changePage = (event: any, value: any) => {
    currentPageActions.setValue(value);
    fetchWorkshops(centerId, workshopsCountActions, value);
  }

  return (
    <Container maxWidth='sm'>
      <Dialog
        fullScreen
        open={isModalOpen.value}
        onClose={isModalOpen.setFalse}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Créer un atelier</DialogTitle>
        <DialogContent>
          <CreateWorkshopForm centerId={centerId} closeModal={isModalOpen.setFalse}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={isModalOpen.setFalse} color='primary'>
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
      <StyledContent>
        <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
          {center.name}
        </WorkshopsTitle>
        <Typography>Nb d'ateliers : {center.workshops.length}</Typography>
      </StyledContent>
      <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
        Ateliers
      </WorkshopsTitle>
      <AddNoteIcon
        size='medium'
        color='primary'
        aria-label='add'
        onClick={isModalOpen.setTrue}
      >
        <AddIcon/>
      </AddNoteIcon>
      <PaginationContainer>
        <Pagination
          count={Math.ceil(workshopsCount / paginationCount)}
          variant="outlined"
          page={currentPage} onChange={changePage}
        />
      </PaginationContainer>
      {workshops.map((workshop: any) => (
        <Workshop key={workshop.id} workshop={workshop}/>
      ))}
    </Container>
  );
};

export default Workshops;
