import { Checkbox, Chip, FormControlLabel, FormGroup } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Formik, FormikProps } from 'formik';
import React, { useContext } from 'react';
import DatePickerField from '../../../Components/DatePickerField';
import MultiSelectField from '../../../Components/MultiSelectField';
import NumberField from '../../../Components/NumberField';
import { WorkshopInterface } from '../../../Types/Workshops';
import { useBoolean } from 'react-hanger/array';
import DropdownsContext from '../../../Context/DropdownsContext';
import { getDropdownNameFromIri, getDropdownOptionsArray, getDropdownValues } from '../../../Services/dropdowns';
import FormRow from '../../../Components/FormRow';
import { useHistory } from 'react-router-dom';
import SelectField from '../../../Components/SelectField';
import FormTextField from '../../../Components/FormTextField';
import PrimaryButton from '../../../Components/PrimaryButton';

interface WorkshopFormProps {
  workshop: WorkshopInterface;
  onSubmit: Function;
}

const WorkshopForm: React.FC<WorkshopFormProps> = ({workshop, onSubmit}) => {
  const history = useHistory();
  const [loading, loadingActions] = useBoolean(false);
  const {dropdowns} = useContext(DropdownsContext);
  const allSkills = getDropdownValues(dropdowns, 'skills');
  const allSkillsArray = getDropdownOptionsArray(dropdowns, 'skills');

  const addSkillsSuggestions = (skills: string[], topicIris: string[]) => {
    const newSkills = skills;
    topicIris.reduce((accumulator: any, topicIri: string) => ([
        ...accumulator, ...allSkillsArray.filter((skill: any) => skill['topic']['@id'] === topicIri)]
    ), []).forEach((topic: any) => {
      if (!newSkills.includes(topic['@id'])) {
        newSkills.push(topic['@id']);
      }
    });

    return newSkills;
  }

  return (
    <Formik
      initialValues={workshop}
      onSubmit={async (data) => {
        loadingActions.setTrue();
        await onSubmit(data);
        setTimeout(() => {
          loadingActions.setFalse();
          history.goBack();
        }, 500);
      }}
      render={({handleChange, handleSubmit, values, setFieldValue}: FormikProps<any>) => (
        <form onSubmit={handleSubmit}>
          <FormRow>
            <DatePickerField
              label="Date"
              handleChange={(datetime: Date) => {
                setFieldValue('date', new Date(datetime.toISOString()))
              }}
              value={values.date}
            />
            <NumberField
              id='nbParticipants'
              value={values.nbParticipants}
              label="Nombre de participants"
              handleChange={handleChange}
              required={true}
            />
          </FormRow>
          <FormRow>
            <SelectField
              id='duration'
              label='Durée'
              value={values.duration}
              setFieldValue={setFieldValue}
              required={true}
            />
            <FormTextField
              id='attendees'
              value={values.attendees}
              label="Animateur.trice"
              required={true}
              handleChange={handleChange}
              style={{marginLeft: 8, marginRight: 8, flex: 1}}
            />
          </FormRow>
          <FormRow>
            <MultiSelectField
              id="topics"
              label="Thèmes"
              value={values.topics}
              required={true}
              setFieldValue={(_id: string, topicIris: string[]) => {
                setFieldValue('topics', topicIris);
                setFieldValue('skills', addSkillsSuggestions(values.skills, topicIris));
              }}
            />
          </FormRow>
          <FormRow>
            <div>
              {values.skills.map((skill: string) => (
                <Chip key={skill} label={getDropdownNameFromIri(allSkills, skill)} variant="outlined" onDelete={() =>
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
            />
          </FormRow>
          <FormRow>
            <MultiSelectField
              id="ageBreakpoints"
              label="Tranches d'âge"
              value={values.ageBreakpoints}
              setFieldValue={setFieldValue}
            />
          </FormRow>
          <FormRow>
            <MultiSelectField
              id="usedEquipments"
              label="Outils utilisés"
              value={values.usedEquipments}
              setFieldValue={setFieldValue}
            />
          </FormRow>
          <FormRow>
            <MultiSelectField
              id="equipmentSuppliers"
              label="Équipement fourni par"
              value={values.equipmentSuppliers}
              setFieldValue={setFieldValue}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='globalReport'
              value={values.globalReport}
              label="Bilan global"
              required={true}
              multiline
              rows='4'
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='improvementAxis'
              value={values.improvementAxis}
              label="Axes d'amélioration"
              multiline={true}
              rows='4'
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormControlLabel
              control={
                <Checkbox
                  style={{marginLeft: 8}}
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
              ? <PrimaryButton disabled={true}><CircularProgress size={20}/></PrimaryButton>
              : <PrimaryButton>{workshop['@id'] ? "Mettre à jour" : "Créer"}</PrimaryButton>
            }
          </FormRow>
        </form>
      )}
    />
  );
}

export default WorkshopForm;
