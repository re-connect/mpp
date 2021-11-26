import React from 'react';
import styled from 'styled-components';
import {Card, CardContent, Chip, Typography} from '@material-ui/core';
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
        <Typography>
          Nombre de participants : {workshop.nbParticipants}
        </Typography>
        <Typography>
          Thèmes : {workshop.topics.map((topic: any) => (
          <Chip key={topic.id} label={topic.name} variant='outlined'/>
        ))}
        </Typography>
        {!workshop.topicPrecision ? null : (
          <Typography variant='body2' component='p'>
            Précisions sur le thème : {workshop.topicPrecision}
          </Typography>
        )}
        {/*<Typography>*/}
        {/*  Compétences : {workshop.skills.map((skill: any) => (*/}
        {/*  <Chip key={skill.id} label={skill.name}/>*/}
        {/*))}*/}
        {/*</Typography>*/}
        <Typography>
          Types de participants : {workshop.participantKinds.map((participantKind: any) => (
          <Chip key={participantKind.id} label={participantKind.name} variant='outlined'/>
        ))}
        </Typography>
        <Typography>
          Tranches d'âge : {workshop.ageBreakpoints.map((ageBreakpoint: any) => (
          <Chip key={ageBreakpoint.id} label={ageBreakpoint.name} variant='outlined'/>
        ))}
        </Typography>
        <Typography>
          Outils utilisés : {workshop.usedEquipments.map((usedEquipment: any) => (
          <Chip key={usedEquipment.id} label={usedEquipment.name} variant='outlined'/>
        ))}
        </Typography>
        <Typography>
          Equipement fourni par : {workshop.equipmentSuppliers.map((equipmentSupplier: any) => (
          <Chip key={equipmentSupplier.id} label={equipmentSupplier.name} variant='outlined'/>
        ))}
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
