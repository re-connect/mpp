import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import  FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
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
import { useNavigate } from 'react-router-dom';
import SelectField from '../../../Components/SelectField';
import FormTextField from '../../../Components/FormTextField';
import PrimaryButton from '../../../Components/PrimaryButton';

interface WorkshopFormProps {
  workshop: WorkshopInterface;
  onSubmit: (data: object) => Promise<void>;
}

const WorkshopForm: React.FC<WorkshopFormProps> = ({workshop, onSubmit}) => {
  const navigate = useNavigate();
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
          navigate(-1);
        }, 500);
      }}
      render={({handleChange, handleSubmit, values, setFieldValue}: FormikProps<any>) => (
        <form onSubmit={handleSubmit}>
          <FormRow>
            <DatePickerField
              label="Date"
              handleChange={(datetime: Date) => setFieldValue('date', datetime)}
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
            <NumberField
              id='nbNewParticipants'
              value={values.nbNewParticipants}
              label="Nombre de nouveaux participants"
              handleChange={handleChange}
              required={true}
            />
          </FormRow>
          <FormRow>
            <NumberField
              id='femaleCount'
              value={values.femaleCount}
              label="nb Femmes"
              handleChange={handleChange}
              required={true}
            />
            <NumberField
              id='maleCount'
              value={values.maleCount}
              label="nb Hommes"
              handleChange={handleChange}
              required={true}
            />
            <NumberField
              id='noGenderCount'
              value={values.noGenderCount}
              label="nb Autres"
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
            <FormTextField
              id='place'
              label='Lieu'
              value={values.place}
              handleChange={handleChange}
              required={true}
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
              id='improvementAxis'
              value={values.globalReport}
              label="Bilan global et axes d'amélioration"
              multiline={true}
              rows='4'
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='updateProposal'
              value={values.updateProposal}
              label="Proposition de modification (évolution d'une fonctionnalité, d'un site...)"
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='addProposal'
              value={values.addProposal}
              label="Suggestion d'ajout par les pro/bénef (sujets, thématiques...)"
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormControlLabel
              control={
                <Checkbox
                  style={{marginLeft: 8}}
                  value={values.usedVault}
                  onChange={(event, value) =>
                    setFieldValue('usedVault', value)
                  }
                  color='primary'
                />
              } label="Coffre-fort numérique"/>
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
              <PrimaryButton isLoading={loading}>{workshop['@id'] ? "Mettre à jour" : "Créer"}</PrimaryButton>
          </FormRow>
        </form>
      )}
    />
  );
}

export default WorkshopForm;
