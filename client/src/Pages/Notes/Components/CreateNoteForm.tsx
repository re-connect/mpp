import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Formik, FormikProps } from 'formik';
import * as React from 'react';
import styled from 'styled-components';
import NotesContext from '../../../Context/NotesContext';
import { makeRequest, notesEndpoint } from '../../../Services/requests';

const StyledForm = styled.form`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

interface NoteInterface {
  date: Date;
  center: string;
  hours: number;
  nbPros: number;
  nbProAccounts: number;
  nbBeneficiaries: number;
  nbBeneficiariesAccounts: number;
  nbStoredDocs: number;
  beneficiariesNotes: string;
  proNotes: string;
  reconnectNotes: string;
}

const CreateNoteForm: any = ({centerId, closeModal}: any) => {
    const {notes, setNotes} = React.useContext(NotesContext);
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const create = async (note: NoteInterface) => {
      const response = await makeRequest(notesEndpoint, "POST", note);
      closeModal();
      setNotes([response.data, ...notes]);
    }

    function handleDateChange(date: any) {
      setSelectedDate(date);
    }

    return (
      <Container maxWidth='sm'>
        <Formik
          initialValues={{
            date: new Date(),
            center: '',
            hours: 0,
            attendees: '',
            place: '',
            nbPros: 0,
            nbProAccounts: 0,
            nbBeneficiaries: 0,
            nbBeneficiariesAccounts: 0,
            nbStoredDocs: 0,
            beneficiariesNotes: '',
            proNotes: '',
            reconnectNotes: '',
          }}
          onSubmit={(values: NoteInterface) => {
            create({...values, date: selectedDate, center: `/api/centers/${centerId}`});
          }}
          render={(props: FormikProps<any>) => (
            <StyledForm onSubmit={props.handleSubmit}>
              <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      format='dd/MM/yyyy'
                      margin='normal'
                      id='date-picker-inline'
                      label='Date'
                      onChange={handleDateChange}
                      variant='inline'
                      value={selectedDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div
                  style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                >
                  <TextField
                    id='hours'
                    label="Nombre d'heures"
                    name='hours'
                    onChange={props.handleChange}
                    type='number'
                    variant='outlined'
                  />
                </div>
              </div>
              <div style={{height: 16}}/>
              <div style={{display: 'flex'}}>
                <div
                  style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                >
                  <TextField
                    id='nb-pros'
                    label='Nb pros rencontrés'
                    name='nbPros'
                    onChange={props.handleChange}
                    type='number'
                    variant='outlined'
                  />
                </div>
                <div
                  style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                >
                  <TextField
                    id='nb-pro-accounts'
                    label='Nb comptes pros crées'
                    name='nbProAccounts'
                    onChange={props.handleChange}
                    type='number'
                    variant='outlined'
                  />
                </div>
              </div>
              <div style={{height: 16}}/>
              <div style={{display: 'flex'}}>
                <div
                  style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                >
                  <TextField
                    id='nb-beneficiaries'
                    label='Nb benefs rencontrés'
                    name='nbBeneficiaries'
                    onChange={props.handleChange}
                    type='number'
                    variant='outlined'
                  />
                </div>
                <div style={{width: 8}}/>
                <div
                  style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                >
                  <TextField
                    id='nb-beneficiaries-accounts'
                    label='Nb comptes benef crées'
                    name='nbBeneficiariesAccounts'
                    onChange={props.handleChange}
                    type='number'
                    variant='outlined'
                  />
                </div>
                <div style={{width: 8}}/>
                <div
                  style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                >
                  <TextField
                    id='nb-docs-stored'
                    label='Nb doc stockés'
                    name='nbStoredDocs'
                    onChange={props.handleChange}
                    type='number'
                    variant='outlined'
                  />
                </div>
              </div>
              <TextField
                id='attendees'
                name='attendees'
                type='text'
                label='Qui a fait la perm'
                margin='normal'
                variant='outlined'
                onChange={props.handleChange}
              />
              {props.errors.attendees && <div id='feedback'>{props.errors.attendees}</div>}
              <TextField
                id='place'
                name='place'
                type='text'
                label='Lieu (optionnel)'
                margin='normal'
                variant='outlined'
                value={props.values.place}
                onChange={props.handleChange}
              />
              {props.errors.place && <div id='feedback'>{props.errors.place}</div>}
              <TextField
                id='beneficiaries-notes'
                name='beneficiariesNotes'
                type='text'
                label='Remarques en rapport avec les bénéficiaires'
                margin='normal'
                variant='outlined'
                multiline
                rows='4'
                onChange={props.handleChange}
              />
              {props.errors.beneficiariesNotes && (
                <div id='feedback'>{props.errors.beneficiariesNotes}</div>
              )}
              <TextField
                id='pro-notes'
                name='proNotes'
                type='text'
                label='Remarques en rapport avec les professionnels'
                margin='normal'
                variant='outlined'
                multiline
                rows='4'
                onChange={props.handleChange}
              />
              {props.errors.proNotes && <div id='feedback'>{props.errors.proNotes}</div>}
              <TextField
                id='reconnect-notes'
                name='reconnectNotes'
                type='text'
                label='Remarques en rapport avec Reconnect'
                margin='normal'
                variant='outlined'
                multiline
                rows='4'
                onChange={props.handleChange}
              />
              {props.errors.reconnectNotes && <div id='feedback'>{props.errors.reconnectNotes}</div>}
              <Button variant='contained' color='primary' type='submit'>
                Créer
              </Button>
            </StyledForm>
          )}
        />
      </Container>
    );
  }
;

export default CreateNoteForm;
