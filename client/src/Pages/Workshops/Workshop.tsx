import { Card, CardContent, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import ChipList from '../../Components/ChipList';
import DropdownSingleValue from '../../Components/DropdownSingleValue';

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
        Qui a animé l'atelier : {workshop.attendees}
      </Typography>
      <Typography>
        Nombre de participants : {workshop.nbParticipants}
      </Typography>
        Durée : <DropdownSingleValue iri={workshop.duration} dropdownKind="durations"/> minutes
      <div>
        Thèmes : <ChipList list={workshop.topics} dropdownKind="topics"/>
      </div>
      {!workshop.topicPrecision ? null : (
        <Typography variant='body2' component='p'>
          Précisions sur le thème : {workshop.topicPrecision}
        </Typography>
      )}
      <div>
        Compétences : <ChipList list={workshop.skills} dropdownKind="skills"/>
      </div>
      <div>
        Types de participants : <ChipList list={workshop.participantKinds} dropdownKind="participantKinds"/>
      </div>
      <div>
        Tranches d'âge : <ChipList list={workshop.ageBreakpoints} dropdownKind="ageBreakpoints"/>
      </div>
      <div>
        Outils utilisés : <ChipList list={workshop.usedEquipments} dropdownKind="usedEquipments"/>
      </div>
      <div>
        Equipement fourni par : <ChipList list={workshop.equipmentSuppliers} dropdownKind="equipmentSuppliers"/>
      </div>
      <Typography>
        Bilan global : {workshop.globalReport}
      </Typography>
      <Typography>
        Axes d'amélioration : {workshop.improvementAxis}
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
