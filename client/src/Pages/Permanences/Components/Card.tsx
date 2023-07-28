import {Avatar, Card as MuiCard, CardActions, CardContent, Chip, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {format} from 'date-fns';
import React from 'react';
import {getIdFromIri} from '../../../Services/helpers';
import Link from "../../../Components/Link";

interface SectionInterface {
  label: string;
  count: number;
}

interface SectionProps {
  section: SectionInterface;
}

const Section: React.FC<SectionProps> = ({section: {label, count}}) => (
  <>
    <br/>
    <Typography variant='subtitle1'>{label}</Typography>
    <Typography variant='body2' component='p'>{count}</Typography>
  </>
);

const Card = (({note}: any) => {
  const chips = [
    {label: 'Professionnels rencontrés', count: note.nbPros},
    {label: 'Bénéficiaires rencontrés', count: note.nbBeneficiaries},
    {label: 'CFN créés', count: note.nbBeneficiariesAccounts},
    {label: 'Documents stockés', count: note.nbStoredDocs},
  ];
  const sections: Array<SectionInterface> = [
    {label: 'Remarques concernant les bénéficiaires :', count: note.beneficiariesNotes},
    {label: 'Remarques concernant les professionnels :', count: note.proNotes},
    {label: 'Remarques concernant Reconnect :', count: note.reconnectNotes},
  ];

  return (
    <MuiCard elevation={6} style={{marginTop: '1rem'}}>
      <CardContent>
        <CardActions style={{justifyContent: 'flex-end'}}>
          <Link
            href={`/permanence/${getIdFromIri(note['@id'])}/edit`}
            text="Mettre à jour"
            Icon={EditIcon}
          />
        </CardActions>
        <Typography color='textPrimary' gutterBottom>
          Date : {format(new Date(note.date), 'dd-MM-yyyy')}
        </Typography>
        <Typography variant='body2' component='p'>
          Durée : {note.hours} h
        </Typography>
        {!note.attendees ? null : (
          <Typography variant='body2' component='p'>
            Participants : {note.attendees}
          </Typography>
        )}
        {!note.place ? null : (
          <Typography variant='body2' component='p'>
            Lieu : {note.place}
          </Typography>
        )}
        {chips.map(chip =>
          <Chip
            avatar={<Avatar>{chip.count}</Avatar>}
            label={chip.label}
            key={chip.label}
          />
        )}
        <Typography variant="subtitle1">
          Genres :
        </Typography>
        <Typography variant="body2">
          [ Femmes : {note.femaleCount} ] [ Hommes : {note.maleCount} ] [ Autres : {note.noGenderCount} ]
        </Typography>
        {sections.map((section: SectionInterface) =>
          <Section key={section.label} section={section}/>
        )}
      </CardContent>
    </MuiCard>
  );
});

export default Card;
