import { Card, CardContent, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import ChipList from '../../Components/ChipList';

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const Workshop = ({workshop}: any) => (
  <StyledCard>
    <CardContent style={{position: 'relative', backgroundColor: '#212121'}}>
      <Typography color='textPrimary' gutterBottom>
        Date : {format(new Date(workshop.date), 'dd-MM-yyyy')}
      </Typography>
      <Typography>
        Nombre de participants : {workshop.nbParticipants}
      </Typography>
      <div>
        Thèmes : <ChipList list={workshop.topics}/>
      </div>
      {!workshop.topicPrecision ? null : (
        <Typography variant='body2' component='p'>
          Précisions sur le thème : {workshop.topicPrecision}
        </Typography>
      )}
      <div>
        Compétences : <ChipList list={workshop.skills}/>
      </div>
      <div>
        Types de participants : <ChipList list={workshop.participantKinds}/>
      </div>
      <div>
        Tranches d'âge : <ChipList list={workshop.ageBreakpoints}/>
      </div>
      <div>
        Outils utilisés : <ChipList list={workshop.usedEquipments}/>
      </div>
      <div>
        Equipement fourni par : <ChipList list={workshop.equipmentSuppliers}/>
      </div>
      <Typography>
        Bilan global : {workshop.globalReport}
      </Typography>
      {!workshop.usedVault ? null : (
        <div>
          <Typography>
            Coffre-fort numérique
          </Typography>
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
    </CardContent>
  </StyledCard>
);

export default Workshop;
