import { Checkbox, Chip, FormControlLabel, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
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
import { buildEntityEndpoint } from '../../../Services/requests';
import { Skill } from '../../../Types/Skills';
import { Topic } from '../../../Types/Topics';
import { WorkshopInterface } from '../../../Types/Workshops';
import SkillsContext from "../../../Context/SkillsContext";
import { useBoolean } from "react-hanger/array";

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
const getSkillsFromTopicIris = (topics: Topic[], iris: string[]) => iris.map(iri => getSkillsFromTopic(topics.find(topic => iri === topic['@id'])))
  .flat()
  .map((skill: Skill) => skill['@id']);

interface WorkshopFormProps {
  workshop: WorkshopInterface;
}

const WorkshopForm: React.FC<WorkshopFormProps> = ({workshop}) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [loading, loadingActions] = useBoolean(false);
  const {participantKinds} = useContext(ParticipantKindsContext);
  const {equipmentSuppliers} = useContext(EquipmentSuppliersContext);
  const {ageBreakpoints} = useContext(AgeBreakpointsContext);
  const {usedEquipments} = useContext(UsedEquipmentsContext);
  const {topics} = useContext(TopicsContext);
  const {skills} = useContext(SkillsContext);

  const entityUrl = buildEntityEndpoint(workshop);
  const updateWorkshop = UseFetchData(entityUrl, () => setTimeout(loadingActions.setFalse, 500), 'PUT');

  console.log(workshop);

  return (
    <Formik
      initialValues={workshop}
      onSubmit={async (data) => {
        loadingActions.setTrue();
        await updateWorkshop(data);
      }}
      render={({handleChange, handleSubmit, values, setFieldValue}: FormikProps<any>) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormRow>
            <DatePickerField label="Date" handleChange={setSelectedDate} value={selectedDate}/>
            <NumberField id='nbParticipants' value={values.nbParticipants} label="Nombre de participants"
                         handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <MultiSelectField
              id="topics"
              label="Thèmes"
              value={values.topics}
              setFieldValue={(_id: string, newValue: string[]) => {
                setFieldValue('topics', newValue);
                const newSkills = values.skills;
                const topicSkills = getSkillsFromTopicIris(topics, newValue);
                topicSkills.forEach((topicIri: string) => {
                  if (!newSkills.includes(topicIri)) {
                    newSkills.push(topicIri);
                  }
                });
                setFieldValue('skills', newSkills);
              }}
              options={topics}
            />
          </FormRow>
          <FormRow>
            <div>
              {values.skills.map((skill: string) => (
                <Chip key={skill} label={getSkillNameFromIri(skills, skill)} variant="outlined" onDelete={() =>
                  setFieldValue('skills', values.skills.filter((currentSkill: string) => currentSkill !== skill))}
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
              value={values.globalReport}
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
              } label={<span style={{color: 'white'}}>Coffre-fort numérique</span>}/>
          </FormRow>
          {!values.usedVault ? null : (
            <FormGroup>
              <FormRow>
                <NumberField id="nbBeneficiariesAccounts" value={values.nbBeneficiariesAccounts}
                             label="Nombre de cfn crées"
                             handleChange={handleChange}/>
                <NumberField id="nbStoredDocs" value={values.nbStoredDocs} label="Nombre de documents stockés"
                             handleChange={handleChange}/>
              </FormRow>
              <FormRow>
                <NumberField id="nbCreatedEvents" value={values.nbCreatedEvents} label="Évènements ajoutés"
                             handleChange={handleChange}/>
                <NumberField id="nbCreatedContacts" value={values.nbCreatedContacts} label="Contacts ajoutés"
                             handleChange={handleChange}/>
                <NumberField id="nbCreatedNotes" value={values.nbCreatedNotes} label="Notes ajoutées"
                             handleChange={handleChange}/>
              </FormRow>
            </FormGroup>
          )}
          <FormRow>
            {loading
              ?
              <Button variant='contained' color='primary' disabled={true} style={{marginLeft: 'auto'}}><CircularProgress
                size={20}/></Button>
              : <Button variant='contained' color='primary' type='submit' style={{marginLeft: 'auto'}}>Mettre à
                jour</Button>
            }
          </FormRow>
        </StyledForm>
      )}
    />
  );
}

export default WorkshopForm;
