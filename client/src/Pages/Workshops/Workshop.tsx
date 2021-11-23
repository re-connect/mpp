import React from 'react';
import styled from 'styled-components';
import {Card, CardContent, Typography} from '@material-ui/core';
import {format} from 'date-fns';

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const Workshop = ({workshop}: any) => {
  return (
    <StyledCard key={workshop.id}>
      <CardContent style={{position: 'relative', backgroundColor: '#212121'}}>
        <Typography color='textPrimary' gutterBottom>
          Date : {format(new Date(workshop.date), 'dd-MM-yyyy')}
        </Typography>
        <Typography variant='body2' component='p'>
          Nombre de participants : {workshop.nbParticipants}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Workshop;
