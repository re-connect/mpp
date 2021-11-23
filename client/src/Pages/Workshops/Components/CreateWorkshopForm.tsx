import React, {useContext} from 'react';
import superagent, {Response} from 'superagent';
import {workshopsEndpoint} from '../../../Services/requests';
import WorkshopsContext from '../../../Context/WorkshopsContext';
import {useHistory} from "react-router-dom";
import {Formik, FormikProps} from "formik";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const StyledForm = styled.form`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

interface WorkshopInterface {
  date: Date;
  center: string;
  nbParticipants: number;
  nbBeneficiariesAccounts: number;
  nbStoredDocs: number;
  nbCreatedEvents: number;
  nbCreatedContacts: number;
  nbCreatedNotes: number;
  author: string;
}

const CreateWorkshopForm = ({centerId, closeModal}: any) => {
  const {workshops, setWorkshops} = useContext(WorkshopsContext);
  const history = useHistory();

  const create = (workshop: WorkshopInterface) => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      superagent
        .post(workshopsEndpoint)
        .send(workshop)
        .set('Authorization', `Bearer ${token}`)
        .then((response: Response) => {
          closeModal();
          setWorkshops([response.body, ...workshops]);
        });
    } else {
      alert('Il semble que vous ne soyez pas connecté, veuillez vous reconnecter');
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
          date: new Date(),
          center: '',
          nbParticipants: 0,
          nbBeneficiariesAccounts: 0,
          nbStoredDocs: 0,
          nbCreatedEvents: 0,
          nbCreatedContacts: 0,
          nbCreatedNotes: 0,
          author: 'moi'
        }}
        onSubmit={(values: WorkshopInterface) => {
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
                  label="Nombre de participants"
                  name='nbParticipants'
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
                  id='hours'
                  label="Nombre de cfn crées"
                  name='nbBeneficiariesAccounts'
                  onChange={props.handleChange}
                  type='number'
                  variant='outlined'
                />
              </div>
              <div
                style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
              >
                <TextField
                  id='hours'
                  label="Nombre de documents stockés"
                  name='nbStoredDocs'
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
                  id='hours'
                  label="Nombre d'évènements créés"
                  name='nbCreatedEvents'
                  onChange={props.handleChange}
                  type='number'
                  variant='outlined'
                />
              </div>
              <div
                style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
              >
                <TextField
                  id='hours'
                  label="Nombre de contacts ajoutées"
                  name='nbCreatedContacts'
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
                  id='hours'
                  label="Nombre de notes ajoutées"
                  name='nbCreatedNotes'
                  onChange={props.handleChange}
                  type='number'
                  variant='outlined'
                />
              </div>
            </div>
            <Button variant='contained' color='primary' type='submit'>
              Créer
            </Button>
          </StyledForm>
        )}
      />
    </Container>
  );
}

export default CreateWorkshopForm;
