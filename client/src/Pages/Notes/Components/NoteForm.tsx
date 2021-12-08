import React from 'react';
import { Formik, FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useBoolean } from 'react-hanger/array';
import DatePickerField from '../../../Components/DatePickerField';
import FormRow from '../../../Components/FormRow';
import NumberField from '../../../Components/NumberField';
import CircularProgress from '@material-ui/core/CircularProgress';

const NoteForm = ({note ,onSubmit}: any) => {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
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
            <DatePickerField label="Date" handleChange={setSelectedDate} value={selectedDate}/>
            <NumberField id='hours' value={values.hours} label="Nombre d'heures" handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <NumberField id='nbPros' value={values.nbPros} label="Nb pros rencontrés" handleChange={handleChange}/>
            <NumberField id='nbProAccounts' value={values.nbProAccounts} label="Nb comptes pros créés" handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <NumberField id='nbBeneficiaries' value={values.nbBeneficiaries} label="Nb benef rencontrés" handleChange={handleChange}/>
            <NumberField id='nbBeneficiariesAccounts' value={values.nbBeneficiariesAccounts} label="Nb comptes benef créés" handleChange={handleChange}/>
            <NumberField id='nbStoredDocs' value={values.nbStoredDocs} label="Nb doc stockés" handleChange={handleChange}/>
          </FormRow>
          <FormRow>
            <TextField
              id='attendees'
              name='attendees'
              type='text'
              label="Qui a fait la perm"
              variant='outlined'
              value={values.attendees}
              onChange={handleChange}
              style={{marginLeft: 8, marginRight: 8, flex: 1}}
            />
          </FormRow>
          <FormRow>
            <TextField
              id='place'
              name='place'
              type='text'
              label='Lieu (optionnel)'
              variant='outlined'
              value={values.place}
              onChange={handleChange}
              style={{marginLeft: 8, marginRight: 8, flex: 1}}
            />
          </FormRow>
          <FormRow>
            <TextField
              id='beneficiariesNotes'
              name='beneficiariesNotes'
              type='text'
              label='Remarques en rapport avec les bénéficiaires'
              variant='outlined'
              multiline
              rows='4'
              value={values.beneficiariesNotes}
              onChange={handleChange}
              style={{marginLeft: 8, marginRight: 8, flex: 1}}
            />
          </FormRow>
          <FormRow>
            <TextField
              id='proNotes'
              name='proNotes'
              type='text'
              label='Remarques en rapport avec les professionnels'
              variant='outlined'
              multiline
              rows='4'
              value={values.proNotes}
              onChange={handleChange}
              style={{marginLeft: 8, marginRight: 8, flex: 1}}
            />
          </FormRow>
          <FormRow>
            <TextField
              id='reconnectNotes'
              name='reconnectNotes'
              type='text'
              label='Remarques en rapport avec Reconnect'
              variant='outlined'
              multiline
              rows='4'
              value={values.reconnectNotes}
              onChange={handleChange}
              style={{marginLeft: 8, marginRight: 8, flex: 1}}
            />
          </FormRow>
          <FormRow>
            {loading
              ?
              <Button variant='contained' color='primary' disabled={true} style={{marginLeft: 8, flex: 1}}><CircularProgress
                size={20}/></Button>
              : <Button variant='contained' color='primary' type='submit' style={{marginLeft: 8, flex: 1}}>
                Créer
              </Button>
            }
          </FormRow>
        </form>
      )}
    />
  );
}

export default NoteForm;
