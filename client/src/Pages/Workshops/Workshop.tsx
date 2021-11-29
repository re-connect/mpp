import React from 'react';
import styled from 'styled-components';
import {Card, CardContent, Chip, Typography} from '@material-ui/core';
import {format} from 'date-fns';
import ChipList from '../../Components/ChipList';

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
        <Typography>
          Nombre de participants : {workshop.nbParticipants}
        </Typography>
        <Typography>
          Thèmes : <ChipList list={workshop.topics}/>
        </Typography>
        {!workshop.topicPrecision ? null : (
          <Typography variant='body2' component='p'>
            Précisions sur le thème : {workshop.topicPrecision}
          </Typography>
        )}
        <Typography>
          Compétences : <ChipList list={workshop.skills}/>
        </Typography>
        <Typography>
          Types de participants : <ChipList list={workshop.participantKinds}/>
        </Typography>
        <Typography>
          Tranches d'âge : <ChipList list={workshop.ageBreakpoints}/>
        </Typography>
        <Typography>
          Outils utilisés : <ChipList list={workshop.usedEquipments}/>
        </Typography>
        <Typography>
          Equipement fourni par : <ChipList list={workshop.equipmentSuppliers}/>
        </Typography>
        {!workshop.usedVault ? null : (
          <div>
            <Typography variant='body2' component='p'>
              Nb CFN créés : {workshop.nbBeneficiariesAccounts}
            </Typography>
            <Typography variant='body2' component='p'>
              Nb documents : {workshop.nbStoredDocs}
            </Typography>
            <Typography variant='body2' component='p'>
              Nb rappels : {workshop.nbCreatedEvents}
            </Typography>
            <Typography variant='body2' component='p'>
              Nb contacts : {workshop.nbCreatedContacts}
            </Typography>
            <Typography variant='body2' component='p'>
              Nb notes : {workshop.nbCreatedNotes}
            </Typography>
          </div>
        )}
        <Typography>
          Bilan global : {workshop.globalReport}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Workshop;
