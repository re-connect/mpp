import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Formik, FormikProps } from 'formik';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import superagent, { Response } from 'superagent';
import DatePickerField from '../../../Components/DatePickerField';
import MultiSelectField from '../../../Components/MultiSelectField';
import NumberField from '../../../Components/NumberField';
import WorkshopsContext from '../../../Context/WorkshopsContext';
import {participantKindsEndpoint, workshopsEndpoint} from '../../../Services/requests';
import { WorkshopInterface } from '../../../Types/Workshops';
import ParticipantKindsContext from '../../../Context/ParticipantKindsContext';
import UseFetchDataEffect from '../../../Hooks/UseFetchDataEffect';

const StyledForm = styled.form`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  margin-top: 16px;
`;

const initialWorkshop: WorkshopInterface = {
    date: new Date(),
    center: '',
    globalReport: '',
    nbParticipants: 0,
    nbBeneficiariesAccounts: 0,
    nbStoredDocs: 0,
    nbCreatedEvents: 0,
    nbCreatedContacts: 0,
    nbCreatedNotes: 0,
    author: '',
    participantKind: [],
};

const CreateWorkshopForm = ({centerId, closeModal}: any) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const {workshops, setWorkshops} = useContext(WorkshopsContext);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const {participantKinds, setParticipantKinds} = useContext(ParticipantKindsContext);

  UseFetchDataEffect(participantKindsEndpoint, setParticipantKinds);

  const create = (workshop: WorkshopInterface) => {
    console.log(workshop);
    if (token !== null) {
      superagent
        .post(workshopsEndpoint)
        .send({...workshop, date: selectedDate, center: `/api/centers/${centerId}`})
        .set('Authorization', `Bearer ${token}`)
        .then((response: Response) => {
          closeModal();
          setWorkshops([response.body, ...workshops]);
        });
    } else {
      alert('Il semble que vous ne soyez pas connecté, veuillez vous reconnecter');
      history.push('/login');
    }
  };

  return (
    <Container maxWidth='sm'>
      <Formik
        initialValues={initialWorkshop}
        onSubmit={create}
        render={(props: FormikProps<any>) => (
          <StyledForm onSubmit={props.handleSubmit}>
            <FormRow>
                <DatePickerField label="Date" handleChange={setSelectedDate} value={selectedDate}/>
                <NumberField id='nbParticipants' label="Nombre de participants" handleChange={props.handleChange}/>
              </FormRow>
            <FormRow>
              <NumberField id='nbBeneficiariesAccounts' label="Nombre de cfn crées" handleChange={props.handleChange}/>
              <NumberField id='nbStoredDocs' label="Nombre de documents stockés"handleChange={props.handleChange}/>
            </FormRow>
            <FormRow>
              <NumberField id='nbCreatedEvents' label="Nombre d'évènements créés" handleChange={props.handleChange}/>
              <NumberField id='nbCreatedContacts' label="Nombre de contacts ajoutées" handleChange={props.handleChange}/>
              <NumberField id='nbCreatedNotes' label="Nombre de notes ajoutées" handleChange={props.handleChange}/>
            </FormRow>
            <FormRow>
              <MultiSelectField id="participantKind" label="Types de participants" value={props.values.participantKind} setFieldValue={props.setFieldValue} options={participantKinds}/>
            </FormRow>
            <FormRow>
              <TextField id='globalReport'label="Bilan global"name='globalReport' type='text' variant='outlined' multiline rows='4' onChange={props.handleChange} style={{flex: 1}}/>
            </FormRow>
            <FormRow>
              <Button variant='contained' color='primary' type='submit'>Créer</Button>
            </FormRow>
          </StyledForm>
        )}
      />
    </Container>
  );
}

export default CreateWorkshopForm;
