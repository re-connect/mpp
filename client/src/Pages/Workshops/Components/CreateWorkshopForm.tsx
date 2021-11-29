import { Chip } from '@material-ui/core';
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
import AgeBreakpointsContext from '../../../Context/AgeBreakpointsContext';
import EquipmentSuppliersContext from '../../../Context/EquipmentSuppliersContext';
import ParticipantKindsContext from '../../../Context/ParticipantKindsContext';
import TopicsContext from '../../../Context/TopicsContext';
import UsedEquipmentsContext from '../../../Context/UsedEquipmentsContext';
import WorkshopsContext from '../../../Context/WorkshopsContext';
import UseFetchDataEffect from '../../../Hooks/UseFetchDataEffect';
import {
  ageBreakpointsEndpoint,
  equipmentSuppliersEndpoint,
  participantKindsEndpoint,
  topicsEndpoint,
  usedEquipmentsEndpoint,
  workshopsEndpoint
} from '../../../Services/requests';
import { Skill } from '../../../Types/Skills';
import { Topic } from '../../../Types/Topics';
import { WorkshopInterface } from '../../../Types/Workshops';

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
  usedVault: false,
  participantKinds: [],
  equipmentSuppliers: [],
  ageBreakpoints: [],
  usedEquipments: [],
  topics: [],
  skills: [],
};

const getSkillsFromTopic = (topic: Topic|undefined) => undefined !== topic ? topic['skills'] : [];
const getSkillsFromTopicIris = (topics: Topic[], iris: string[]) =>  iris.map(iri => getSkillsFromTopic(topics.find(topic => iri === topic['@id']))).flat();
const removeSkillFromList = (list: Skill[], removedSkill: Skill) => list.filter((skill: Skill) => removedSkill['@id'] !== skill['@id']);

const updateTopics = (setFieldValue: Function, topics: Topic[]) => (_id: string, newValue: string[]) => {
  setFieldValue('topics', newValue);
  setFieldValue('skills', getSkillsFromTopicIris(topics, newValue));
}

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
        .send({
          ...workshop,
          date: selectedDate,
          center: `/api/centers/${centerId}`,
          skills: workshop.skills.map(skill => skill['@id'])
        })
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
        render={({handleChange, handleSubmit, values, setFieldValue}: FormikProps<any>) => (
          <StyledForm onSubmit={handleSubmit}>
            <FormRow>
                <DatePickerField label="Date" handleChange={setSelectedDate} value={selectedDate}/>
                <NumberField id='nbParticipants' label="Nombre de participants" handleChange={handleChange}/>
              </FormRow>
            <FormRow>
              <NumberField id='nbBeneficiariesAccounts' label="Nombre de cfn crées" handleChange={handleChange}/>
              <NumberField id='nbStoredDocs' label="Nombre de documents stockés"handleChange={handleChange}/>
            </FormRow>
            <FormRow>
              <NumberField id='nbCreatedEvents' label="Nombre d'évènements créés" handleChange={handleChange}/>
              <NumberField id='nbCreatedContacts' label="Nombre de contacts ajoutées" handleChange={handleChange}/>
              <NumberField id='nbCreatedNotes' label="Nombre de notes ajoutées" handleChange={handleChange}/>
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="topics"
                label="Thèmes"
                value={values.topics}
                setFieldValue={updateTopics(setFieldValue, topics)}
                options={topics}
              />
            </FormRow>
            <FormRow>
              {values.skills.map((skill: Skill) => (
                <Chip key={skill['@id']} label={skill.name} variant="outlined" onDelete={() =>
                  setFieldValue('skills', removeSkillFromList(values.skills, skill))}
                />
              ))}
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="participantKinds"
                label="Types de participants"
                value={values.participantKinds}
                setFieldValue={setFieldValue}
                options={participantKinds}
              />
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="ageBreakpoints"
                label="Tranches d'âge"
                value={values.ageBreakpoints}
                setFieldValue={setFieldValue}
                options={ageBreakpoints}
              />
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="usedEquipments"
                label="Outils utilisés"
                value={values.usedEquipments}
                setFieldValue={setFieldValue}
                options={usedEquipments}
              />
            </FormRow>
            <FormRow>
              <MultiSelectField
                id="equipmentSuppliers"
                label="Equipement fourni par"
                value={values.equipmentSuppliers}
                setFieldValue={setFieldValue}
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
                onChange={handleChange}
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
