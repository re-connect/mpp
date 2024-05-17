import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {format} from 'date-fns';
import React from 'react';
import ChipList from '../../../Components/ChipList';
import Text from '../../../Components/Text';
import DropdownSingleValue from '../../../Components/DropdownSingleValue';
import EditIcon from '@mui/icons-material//Edit';
import {getIdFromIri} from '../../../Services/helpers';
import Link from "../../../Components/Link";
import {CardActions} from "@mui/material";


const WorkshopCard = ({workshop}: any) => (
  <MuiCard elevation={6} style={{marginTop: '1rem'}}>
    <CardContent>
      <CardActions style={{justifyContent: 'flex-end'}}>
        <Link
          href={`/workshop/${getIdFromIri(workshop['@id'])}/edit`}
          text="Mettre à jour"
          Icon={EditIcon}
        />
      </CardActions>
      <Typography color='textPrimary' gutterBottom>
        Date : {format(new Date(workshop.date), 'dd-MM-yyyy')}
      </Typography>
      <Typography>
        Lieu : {workshop.place}
      </Typography>
      <Typography>
        Animateur.trice : {workshop.attendees}
      </Typography>
      <Typography>
        Durée : <DropdownSingleValue iri={workshop.duration} dropdownKind="durations"/> minutes
      </Typography>
      <Typography>
        Nombre de participants : {workshop.nbParticipants}
      </Typography>
      <Typography>
        Nombre de nouveaux participants : {workshop.nbNewParticipants}
      </Typography>
      <Typography variant="body2">
        Genres : [ Femmes : {workshop.femaleCount} ] [ Hommes : {workshop.maleCount} ] [ Autres
        : {workshop.noGenderCount} ]
      </Typography>
      <br/>
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
        Équipement fourni par : <ChipList list={workshop.equipmentSuppliers} dropdownKind="equipmentSuppliers"/>
      </div>
      <br/>
      <Typography variant="subtitle1">
        Bilan global et axes d'amélioration :
      </Typography>
      <Typography variant="body2" style={{whiteSpace: "pre-line"}}>
        {workshop.improvementAxis}
      </Typography>
      <Typography variant="subtitle1">
        Proposition de modification (évolution d'une fonctionnalité, d'un site...) :
      </Typography>
      <Typography variant="body2" style={{whiteSpace: "pre-line"}}>
        {workshop.updateProposal}
      </Typography>
      <Typography variant="subtitle1">
        Suggestion d'ajout par les pro/bénef (sujets, thématiques...) :
      </Typography>
      <Typography variant="body2" style={{whiteSpace: "pre-line"}}>
        {workshop.addProposal}
      </Typography>
      {!workshop.usedVault ? null : (
        <div>
          <br/>
          <Text text="Coffre-fort numérique :"/>
          <Text text={`- Nb CFN créés : ${workshop.nbBeneficiariesAccounts}`}/>
          <Text text={`- Nb documents : ${workshop.nbStoredDocs}`}/>
          <Text text={`- Nb rappels : ${workshop.nbCreatedEvents}`}/>
          <Text text={`- Nb contacts : ${workshop.nbCreatedContacts}`}/>
          <Text text={`- Nb notes : ${workshop.nbCreatedNotes}`}/>
        </div>
      )}
    </CardContent>
  </MuiCard>
);

export default WorkshopCard;
