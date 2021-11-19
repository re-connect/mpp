import React, {useContext, useEffect} from 'react';
import useFetchCenter from '../../Services/useFetchCenter';
import WorkshopsContext from '../../Context/WorkshopsContext';
import useFetchWorkshops from '../../Services/useFetchWorkshops';
import {useParams} from 'react-router-dom';
import Workshop from './Workshop';
import {Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Typography} from '@material-ui/core';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import {useBoolean} from 'react-hanger';
import CreateWorkshopForm from './Components/CreateWorkshopForm';

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

const Workshops = () => {
    const isModalOpen = useBoolean(false);
    const centerId = useParams().centerId;
    const {workshops} = useContext(WorkshopsContext);
    const {center, fetchCenter} = useFetchCenter();
    const fetchWorkshops = useFetchWorkshops();

    useEffect(() => {
        fetchCenter(centerId)
    }, [fetchCenter, centerId]);

    useEffect(() => {
        fetchWorkshops(centerId);
    }, [fetchWorkshops, centerId]);

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
                    <CreateWorkshopForm/>
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
            {workshops.map((workshop: any) => (
                <Workshop key={workshop.id} workshop={workshop}/>
            ))}
        </Container>
    );
};

export default Workshops;
