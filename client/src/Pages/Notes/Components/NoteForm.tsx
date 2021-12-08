import React from 'react';
import { Formik, FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useBoolean } from 'react-hanger/array';
import DatePickerField from '../../../Components/DatePickerField';
import FormRow from "../../../Components/FormRow";
import NumberField from "../../../Components/NumberField";

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
            <NumberField id='nbProAccounts' value={values.nbProAccounts} label="Nb comptes pros crées" handleChange={handleChange}/>
          </FormRow>
            {/*<div style={{height: 16}}/>*/}
            {/*<div style={{display: 'flex'}}>*/}
            {/*  <div*/}
            {/*    style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}*/}
            {/*  >*/}
            {/*    <TextField*/}
            {/*      id='nb-beneficiaries'*/}
            {/*      label='Nb benefs rencontrés'*/}
            {/*      name='nbBeneficiaries'*/}
            {/*      onChange={props.handleChange}*/}
            {/*      type='number'*/}
            {/*      variant='outlined'*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div style={{width: 8}}/>*/}
            {/*  <div*/}
            {/*    style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}*/}
            {/*  >*/}
            {/*    <TextField*/}
            {/*      id='nb-beneficiaries-accounts'*/}
            {/*      label='Nb comptes benef crées'*/}
            {/*      name='nbBeneficiariesAccounts'*/}
            {/*      onChange={props.handleChange}*/}
            {/*      type='number'*/}
            {/*      variant='outlined'*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div style={{width: 8}}/>*/}
            {/*  <div*/}
            {/*    style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}*/}
            {/*  >*/}
            {/*    <TextField*/}
            {/*      id='nb-docs-stored'*/}
            {/*      label='Nb doc stockés'*/}
            {/*      name='nbStoredDocs'*/}
            {/*      onChange={props.handleChange}*/}
            {/*      type='number'*/}
            {/*      variant='outlined'*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<TextField*/}
            {/*  id='attendees'*/}
            {/*  name='attendees'*/}
            {/*  type='text'*/}
            {/*  label='Qui a fait la perm'*/}
            {/*  margin='normal'*/}
            {/*  variant='outlined'*/}
            {/*  onChange={props.handleChange}*/}
            {/*/>*/}
            {/*{props.errors.attendees && <div id='feedback'>{props.errors.attendees}</div>}*/}
            {/*<TextField*/}
            {/*  id='place'*/}
            {/*  name='place'*/}
            {/*  type='text'*/}
            {/*  label='Lieu (optionnel)'*/}
            {/*  margin='normal'*/}
            {/*  variant='outlined'*/}
            {/*  value={props.values.place}*/}
            {/*  onChange={props.handleChange}*/}
            {/*/>*/}
            {/*{props.errors.place && <div id='feedback'>{props.errors.place}</div>}*/}
            {/*<TextField*/}
            {/*  id='beneficiaries-notes'*/}
            {/*  name='beneficiariesNotes'*/}
            {/*  type='text'*/}
            {/*  label='Remarques en rapport avec les bénéficiaires'*/}
            {/*  margin='normal'*/}
            {/*  variant='outlined'*/}
            {/*  multiline*/}
            {/*  rows='4'*/}
            {/*  onChange={props.handleChange}*/}
            {/*/>*/}
            {/*{props.errors.beneficiariesNotes && (*/}
            {/*  <div id='feedback'>{props.errors.beneficiariesNotes}</div>*/}
            {/*)}*/}
            {/*<TextField*/}
            {/*  id='pro-notes'*/}
            {/*  name='proNotes'*/}
            {/*  type='text'*/}
            {/*  label='Remarques en rapport avec les professionnels'*/}
            {/*  margin='normal'*/}
            {/*  variant='outlined'*/}
            {/*  multiline*/}
            {/*  rows='4'*/}
            {/*  onChange={props.handleChange}*/}
            {/*/>*/}
            {/*{props.errors.proNotes && <div id='feedback'>{props.errors.proNotes}</div>}*/}
            {/*<TextField*/}
            {/*  id='reconnect-notes'*/}
            {/*  name='reconnectNotes'*/}
            {/*  type='text'*/}
            {/*  label='Remarques en rapport avec Reconnect'*/}
            {/*  margin='normal'*/}
            {/*  variant='outlined'*/}
            {/*  multiline*/}
            {/*  rows='4'*/}
            {/*  onChange={props.handleChange}*/}
            {/*/>*/}
            {/*{props.errors.reconnectNotes && <div id='feedback'>{props.errors.reconnectNotes}</div>}*/}
            <Button variant='contained' color='primary' type='submit'>
              Créer
            </Button>
          </form>
        )}
      />
  );
}

export default NoteForm;