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
import {
  ageBreakpointsEndpoint,
  equipmentSuppliersEndpoint,
  participantKindsEndpoint,
  topicsEndpoint,
  usedEquipmentsEndpoint,
  workshopsEndpoint
} from '../../../Services/requests';
import { WorkshopInterface } from '../../../Types/Workshops';
import ParticipantKindsContext from '../../../Context/ParticipantKindsContext';
import UseFetchDataEffect from '../../../Hooks/UseFetchDataEffect';
import EquipmentSuppliersContext from '../../../Context/EquipmentSuppliersContext';
import AgeBreakpointsContext from '../../../Context/AgeBreakpointsContext';
import UsedEquipmentsContext from '../../../Context/UsedEquipmentsContext';
import TopicsContext from '../../../Context/TopicsContext';

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
  participantKinds: [],
  equipmentSuppliers: [],
  ageBreakpoints: [],
  usedEquipments: [],
  topics: [],
};

const CreateWorkshopForm = ({centerId, closeModal}: any) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const {workshops, setWorkshops} = useContext(WorkshopsContext);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const {participantKinds, setParticipantKinds} = useContext(ParticipantKindsContext);
  const {equipmentSuppliers, setEquipmentSuppliers} = useContext(EquipmentSuppliersContext);
  const {ageBreakpoints, setAgeBreakpoints} = useContext(AgeBreakpointsContext);
  const {usedEquipments, setUsedEquipments} = useContext(UsedEquipmentsContext);
  const {topics, setTopics} = useContext(TopicsContext);

  UseFetchDataEffect(participantKindsEndpoint, setParticipantKinds);
  UseFetchDataEffect(equipmentSuppliersEndpoint, setEquipmentSuppliers);
  UseFetchDataEffect(ageBreakpointsEndpoint, setAgeBreakpoints);
  UseFetchDataEffect(usedEquipmentsEndpoint, setUsedEquipments);
  UseFetchDataEffect(topicsEndpoint, setTopics);

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
              <MultiSelectField
                id="topics"
                label="Thèmes"
                value={props.values.topics}
                setFieldValue={props.setFieldValue}
                options={topics}
              />
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="participantKinds"
                label="Types de participants"
                value={props.values.participantKinds}
                setFieldValue={props.setFieldValue}
                options={participantKinds}
              />
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="ageBreakpoints"
                label="Tranches d'âge"
                value={props.values.ageBreakpoints}
                setFieldValue={props.setFieldValue}
                options={ageBreakpoints}
              />
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="usedEquipments"
                label="Outils utilisés"
                value={props.values.usedEquipments}
                setFieldValue={props.setFieldValue}
                options={usedEquipments}
              />
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="equipmentSuppliers"
                label="Equipement fourni par"
                value={props.values.equipmentSuppliers}
                setFieldValue={props.setFieldValue}
                options={equipmentSuppliers}
              />
            </FormRow>
            <FormRow>
              <TextField
                id='globalReport'
                label="Bilan global"
                name='globalReport'
                type='text'
                variant='outlined'
                multiline rows='4'
                onChange={props.handleChange}
                style={{flex: 1}}
              />
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
