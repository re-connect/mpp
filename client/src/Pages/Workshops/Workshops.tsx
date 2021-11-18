import React, {useContext, useEffect} from 'react';
import useFetchCenter from '../../Services/useFetchCenter';
import WorkshopsContext from '../../Context/WorkshopsContext';
import useFetchWorkshops from '../../Services/useFetchWorkshops';
import {useParams} from 'react-router-dom';
import Workshop from './Workshop';
import {Container, Typography} from '@material-ui/core';
import styled from 'styled-components';

const StyledContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

const WorkshopsTitle = styled(Typography)`
  flex: 1;
`;

const Workshops = () => {
    const centerId = useParams().centerId;
    const {list} = useContext(WorkshopsContext);
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
            <StyledContent>
                <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
                    {center.name}
                </WorkshopsTitle>
                <Typography>Nb d'ateliers : {center.workshops.length}</Typography>
            </StyledContent>
            <WorkshopsTitle variant='h4' gutterBottom color='textPrimary'>
                Ateliers
            </WorkshopsTitle>
            {list.map((workshop: any) => (
                <Workshop key={workshop.id} workshop={workshop}/>
            ))}
        </Container>
    );
};

export default Workshops;
