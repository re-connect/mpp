import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import { Formik, FormikProps } from 'formik';
import * as React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import superagent, { Response } from 'superagent';
import { loginEndpoint } from '../Services/requests';

const StyledForm = styled.form`
  padding-top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
`;

const Login: any = withRouter(({ history }: any) => {
  const login = (email: string, password: string) => {
    superagent
      .post(loginEndpoint)
      .send({ email, password })
      .set('accept', 'json')
      .then((response: Response) => {
        localStorage.setItem('token', response.body.token);
        history.push('/');
      });
  };

  const [snackOpen, setSnackOpen] = useState<boolean>(false);

  return (
    <Container maxWidth='sm'>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          console.log(values);
          login(values.email, values.password);
        }}
        render={(props: FormikProps<any>) => (
          <StyledForm onSubmit={props.handleSubmit}>
            <Button
              color='primary'
              variant='contained'
              onClick={() => setSnackOpen(true)}
              style={{ marginTop: 50 }}
            >
              Whaou, est-ce qu'on a des nouvelles fonctionnalités sur MPP ?
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={snackOpen}
              autoHideDuration={6000}
              onClose={() => setSnackOpen(false)}
              message={
                <React.Fragment>
                  <b>Bien vu, maintenant, tu peux: </b>
                  <ul>
                    <li>Voir les statistiques des permanences en haut à droite</li>
                    <li>Renseigner qui a assisté à la permanence</li>
                  </ul>
                </React.Fragment>
              }
            />
            <TextField
              id='email'
              name='email'
              type='email'
              label='Email'
              margin='normal'
              variant='outlined'
              onChange={props.handleChange}
            />
            {props.errors.email && <div id='feedback'>{props.errors.email}</div>}
            <TextField
              id='password'
              name='password'
              type='password'
              label='Password'
              margin='normal'
              variant='outlined'
              onChange={props.handleChange}
            />
            {props.errors.password && <div id='feedback'>{props.errors.password}</div>}
            <Button variant='outlined' color='primary' type='submit'>
              Login
            </Button>
          </StyledForm>
        )}
      />
    </Container>
  );
});

export default Login;
