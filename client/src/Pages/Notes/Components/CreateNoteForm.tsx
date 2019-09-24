import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Formik, FormikProps } from 'formik';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import superagent, { Response } from 'superagent';
import NotesContext from '../../../Context/NotesContext';
import { notesEndpoint } from '../../../Services/requests';

const StyledForm = styled.form`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

interface NoteInterface {
  content: string;
  title: string;
  date: Date;
  person: string;
}

const CreateNoteForm: any = withRouter(({ history, personId, closeModal }: any) => {
  const notesContext = React.useContext(NotesContext);

  const create = (note: NoteInterface) => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      superagent
        .post(notesEndpoint)
        .send(note)
        .set('Authorization', `Bearer ${token}`)
        .then((response: Response) => {
          closeModal();
          notesContext.set([response.body, ...notesContext.list]);
        });
    } else {
      alert('Il semble que vous ne soyez pas connecté, veuillex vous reconnecter');
      history.push('/login');
    }
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function handleDateChange(date: any) {
    setSelectedDate(date);
  }

  return (
    <Container maxWidth='sm'>
      <Formik
        initialValues={{
          title: '',
          content: '',
        }}
        onSubmit={values => {
          create({ ...values, date: selectedDate, person: `/api/people/${personId}` });
        }}
        render={(props: FormikProps<any>) => (
          <StyledForm onSubmit={props.handleSubmit}>
            <TextField
              id='title'
              name='title'
              type='text'
              label='title'
              margin='normal'
              variant='outlined'
              onChange={props.handleChange}
            />
            {props.errors.title && <div id='feedback'>{props.errors.title}</div>}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='dd/MM/yyyy'
                margin='normal'
                id='date-picker-inline'
                label='Date picker inline'
                onChange={handleDateChange}
                value={selectedDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              id='content'
              name='content'
              type='text'
              label='content'
              margin='normal'
              variant='outlined'
              multiline
              rows='4'
              onChange={props.handleChange}
            />
            {props.errors.content && <div id='feedback'>{props.errors.content}</div>}
            <Button variant='outlined' color='primary' type='submit'>
              Créer
            </Button>
          </StyledForm>
        )}
      />
    </Container>
  );
});

export default CreateNoteForm;
