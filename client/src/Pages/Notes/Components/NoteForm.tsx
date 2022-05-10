import React from 'react';
import { Formik, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import { useBoolean } from 'react-hanger/array';
import DatePickerField from '../../../Components/DatePickerField';
import FormRow from '../../../Components/FormRow';
import NumberField from '../../../Components/NumberField';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormTextField from '../../../Components/FormTextField';
import PrimaryButton from '../../../Components/PrimaryButton';
import MultiSelectField from '../../../Components/MultiSelectField';

const NoteForm = ({note, onSubmit}: any) => {
  const history = useHistory();
  const [loading, loadingActions] = useBoolean(false);

  return (
    <Formik
      initialValues={note}
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
            <DatePickerField label="Date"
                             handleChange={(datetime: Date) => {
                               setFieldValue('date', datetime.toDateString())
                             }}
                             value={values.date}/>
            <NumberField id='hours' value={values.hours} label="Nombre d'heures" handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <NumberField id='nbPros' value={values.nbPros} label="Nb pros rencontrés" handleChange={handleChange}/>
            <NumberField id='nbProAccounts' value={values.nbProAccounts} label="Nb comptes pros créés"
                         handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <NumberField id='nbBeneficiaries' value={values.nbBeneficiaries} label="Nb benef rencontrés"
                         handleChange={handleChange}/>
            <NumberField id='nbBeneficiariesAccounts' value={values.nbBeneficiariesAccounts}
                         label="Nb comptes benef créés" handleChange={handleChange}/>
            <NumberField id='nbStoredDocs' value={values.nbStoredDocs} label="Nb doc stockés"
                         handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <MultiSelectField
              id="genders"
              label="Genres"
              required
              value={values.genders}
              setFieldValue={setFieldValue}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='attendees'
              type='text'
              label="Qui a fait la perm"
              value={values.attendees}
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='place'
              label='Lieu (optionnel)'
              value={values.place}
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='beneficiariesNotes'
              label='Remarques en rapport avec les bénéficiaires'
              multiline={true}
              rows='4'
              value={values.beneficiariesNotes}
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='proNotes'
              label='Remarques en rapport avec les professionnels'
              multiline={true}
              rows='4'
              value={values.proNotes}
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormTextField
              id='reconnectNotes'
              label='Remarques en rapport avec Reconnect'
              multiline={true}
              rows='4'
              value={values.reconnectNotes}
              handleChange={handleChange}
            />
          </FormRow>
          <FormRow>
            {loading
              ? <PrimaryButton disabled={true}><CircularProgress size={20}/></PrimaryButton>
              : <PrimaryButton>{note['@id'] ? "Mettre à jour" : "Créer"}</PrimaryButton>
            }
          </FormRow>
        </form>
      )}
    />
  );
}

export default NoteForm;
