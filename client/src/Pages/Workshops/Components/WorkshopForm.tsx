import { Checkbox, Chip, FormControlLabel, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Formik, FormikProps } from 'formik';
import React, { useContext } from 'react';
import styled from 'styled-components';
import DatePickerField from '../../../Components/DatePickerField';
import MultiSelectField from '../../../Components/MultiSelectField';
import NumberField from '../../../Components/NumberField';
import AgeBreakpointsContext from '../../../Context/AgeBreakpointsContext';
import EquipmentSuppliersContext from '../../../Context/EquipmentSuppliersContext';
import ParticipantKindsContext from '../../../Context/ParticipantKindsContext';
import TopicsContext from '../../../Context/TopicsContext';
import UsedEquipmentsContext from '../../../Context/UsedEquipmentsContext';
import UseFetchData from '../../../Hooks/UseFetchData';
import UseFetchDataEffect from '../../../Hooks/UseFetchDataEffect';
import {
  ageBreakpointsEndpoint,
  buildEntityEndpoint,
  equipmentSuppliersEndpoint,
  participantKindsEndpoint,
  skillsEndpoint,
  topicsEndpoint,
  usedEquipmentsEndpoint
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

const getSkillNameFromIri = (list: Skill[], iri: string) => {
  const skill = list.find((item: Skill) => item['@id'] === iri);

  return !skill ? '' : skill.name;
}
const getSkillsFromTopic = (topic: Topic | undefined) => undefined !== topic ? topic['skills'] : [];
const getSkillsFromTopicIris = (topics: Topic[], iris: string[]) => iris.map(iri => getSkillsFromTopic(topics.find(topic => iri === topic['@id']))).flat();
const removeSkillFromList = (list: Skill[], removedSkill: string) => list.filter((skill: Skill) => removedSkill !== skill['@id']);

const updateTopics = (setFieldValue: Function, topics: Topic[]) => (_id: string, newValue: string[]) => {
  setFieldValue('topics', newValue);
  setFieldValue('skills', getSkillsFromTopicIris(topics, newValue));
}

interface WorkshopFormProps {
  workshop: WorkshopInterface;
} 

const WorkshopForm:React.FC<WorkshopFormProps> = ({ workshop }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const {participantKinds, setParticipantKinds} = useContext(ParticipantKindsContext);
  const {equipmentSuppliers, setEquipmentSuppliers} = useContext(EquipmentSuppliersContext);
  const {ageBreakpoints, setAgeBreakpoints} = useContext(AgeBreakpointsContext);
  const {usedEquipments, setUsedEquipments} = useContext(UsedEquipmentsContext);
  const {topics, setTopics} = useContext(TopicsContext);
  const [skills, setSkills] = React.useState<Skill[]>([]);

  const entityUrl = buildEntityEndpoint(workshop);
  const updateWorkshop = UseFetchData(entityUrl, null, 'PUT');

  UseFetchDataEffect(participantKindsEndpoint, (data: any) => setParticipantKinds(data['hydra:member']));
  UseFetchDataEffect(equipmentSuppliersEndpoint, (data: any) => setEquipmentSuppliers(data['hydra:member']));
  UseFetchDataEffect(ageBreakpointsEndpoint, (data: any) => setAgeBreakpoints(data['hydra:member']));
  UseFetchDataEffect(usedEquipmentsEndpoint, (data: any) => setUsedEquipments(data['hydra:member']));
  UseFetchDataEffect(topicsEndpoint, (data: any) => setTopics(data['hydra:member']));
  UseFetchDataEffect(skillsEndpoint, (data: any) => setSkills(data['hydra:member']));

  return (
    <Formik
      initialValues={workshop}
      onSubmit={updateWorkshop}
      render={({handleChange, handleSubmit, values, setFieldValue}: FormikProps<any>) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormRow>
            <DatePickerField label="Date" handleChange={setSelectedDate} value={selectedDate}/>
            <NumberField id='nbParticipants' label="Nombre de participants" handleChange={handleChange}/>
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
            <div>
              {values.skills.map((skill: string) => (
                <Chip key={skill} label={getSkillNameFromIri(skills, skill)} variant="outlined" onDelete={() =>
                  setFieldValue('skills', removeSkillFromList(values.skills, skill))}
                />
              ))}
            </div>
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
            <FormControlLabel
              control={
                <Checkbox
                  value={values.usedVault}
                  onChange={(event, value) => {
                    setFieldValue('usedVault', value)
                  }}
                  color='primary'
                />
              } label='Coffre-fort numérique'/>
          </FormRow>
          {!values.usedVault ? null : (
            <FormGroup>
              <FormRow>
                <NumberField id='nbBeneficiariesAccounts' label="Nombre de cfn crées" handleChange={handleChange}/>
                <NumberField id='nbStoredDocs' label="Nombre de documents stockés" handleChange={handleChange}/>
              </FormRow>
              <FormRow>
                <NumberField id='nbCreatedEvents' label="Évènements ajoutés" handleChange={handleChange}/>
                <NumberField id='nbCreatedContacts' label="Contacts ajoutés" handleChange={handleChange}/>
                <NumberField id='nbCreatedNotes' label="Notes ajoutées" handleChange={handleChange}/>
              </FormRow>
            </FormGroup>
          )}
          <FormRow>
            <Button variant='contained' color='primary' type='submit'>Mettre à jour</Button>
          </FormRow>
        </StyledForm>
      )}
    />
  );
}

export default WorkshopForm;
