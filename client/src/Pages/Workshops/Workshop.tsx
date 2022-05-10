import { Card, CardContent, Fab, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import ChipList from '../../Components/ChipList';
import DropdownSingleValue from '../../Components/DropdownSingleValue';
import EditIcon from '@material-ui/icons/Edit';
import { getIdFromIri } from '../../Services/helpers';
import { useHistory } from 'react-router-dom';

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const EditWorkshop = styled(Fab)`
  position: absolute !important;
  right: 10px;
  top: 10px;
`;

const Workshop = ({workshop}: any) => {
  const history = useHistory();

  return (
    <StyledCard>
      <CardContent style={{position: 'relative', backgroundColor: '#212121'}}>
        <EditWorkshop
          size='small'
          color='primary'
          aria-label='add'
          onClick={() => history.push(`/workshop/${getIdFromIri(workshop['@id'])}/edit`)}
        >
          <EditIcon/>
        </EditWorkshop>
        <Typography color='textPrimary' gutterBottom>
          Date : {format(new Date(workshop.date), 'dd-MM-yyyy')}
        </Typography>
        <Typography>
          Animateur.trice : {workshop.attendees}
        </Typography>
        <Typography>
          Nombre de participants : {workshop.nbParticipants}
        </Typography>
        <Typography>
          Genres : [ Femmes : {workshop.femaleCount} ][ Hommes : {workshop.maleCount} ][ Autres : {workshop.noGenderCount} ]
        </Typography>
        <br/>
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
        <Typography style={{whiteSpace: "pre-line"}}>
          Bilan global : {workshop.globalReport}
        </Typography>
        <Typography style={{whiteSpace: "pre-line"}}>
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
}

export default Workshop;
