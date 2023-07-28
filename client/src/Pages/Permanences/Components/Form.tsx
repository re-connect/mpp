import React from 'react';
import {Formik, FormikProps} from 'formik';
import {useBoolean} from 'react-hanger/array';
import DatePickerField from '../../../Components/DatePickerField';
import FormRow from '../../../Components/FormRow';
import NumberField from '../../../Components/NumberField';
import FormTextField from '../../../Components/FormTextField';
import PrimaryButton from '../../../Components/PrimaryButton';
import {useNavigate} from 'react-router-dom';
import {Permanence} from "../../../Types/Permanence";

interface Props {
  permanence: Permanence;
  onSubmit: () => void;
}

const Form: React.FC<Props> = ({permanence, onSubmit}: any) => {
  const [loading, loadingActions] = useBoolean(false);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={permanence}
      onSubmit={async (data) => {
        loadingActions.setTrue();
        await onSubmit(data);
        setTimeout(() => {
          loadingActions.setFalse();
          navigate(-1);
        }, 500);
      }}
    >
      {({handleChange, handleSubmit, values, setFieldValue}: FormikProps<any>) => (
        <form onSubmit={handleSubmit}>
          <FormRow>
            <DatePickerField label="Date"
                             handleChange={(datetime: Date) => setFieldValue('date', datetime)}
                             value={values.date}
            />
            <NumberField id='hours' value={values.hours} label="Nombre d'heures" handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <NumberField id='nbPros' value={values.nbPros} label="Nb pros présents" handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <NumberField id='nbBeneficiaries' value={values.nbBeneficiaries} label="Nb benef rencontrés"
                         handleChange={handleChange}/>
            <NumberField id='nbBeneficiariesAccounts' value={values.nbBeneficiariesAccounts}
                         label="Nb CFN créés" handleChange={handleChange}/>
            <NumberField id='nbStoredDocs' value={values.nbStoredDocs} label="Nb doc stockés"
                         handleChange={handleChange}/>
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
              required={true}
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
              <PrimaryButton isLoading={loading}>{permanence['@id'] ? "Mettre à jour" : "Créer"}</PrimaryButton>
          </FormRow>
        </form>
      )}
    </Formik>
  );
}

export default Form;
