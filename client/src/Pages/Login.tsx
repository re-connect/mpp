import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import LinkIcon from '@mui/icons-material/Link';
import Typography from '@mui/material/Typography';
import { Formik, FormikProps } from 'formik';
import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { dropdownsEndpoint, loginEndpoint, makeRequest, oauthEndpoint } from '../Services/requests';
import logo from '../Images/logo.png';
import UseFetchData from '../Hooks/UseFetchData';
import DropdownsContext from '../Context/DropdownsContext';

const StyledImage = styled.img`
  width: 140px;
  height: 140px;
  align-self: center;
`;

const StyledImageContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  padding-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {dropdowns, setDropdowns} = useContext(DropdownsContext);
  const fetchDropdowns = UseFetchData(dropdownsEndpoint, setDropdowns);

  const login = async (values: Object) => {
    await makeRequest(loginEndpoint, "POST", values);
    await fetchDropdowns();
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <StyledImageContainer>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
        >
          Ma petite permanence
        </Typography>
        <StyledImage src={logo} alt="logo"/>
      </StyledImageContainer>
      <Formik
        initialValues={{email: "", password: ""}}
        onSubmit={login}
        render={(props: FormikProps<any>) => (
          <StyledForm onSubmit={props.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              margin="normal"
              variant="outlined"
              onChange={props.handleChange}
            />
            {props.errors.email && typeof props.errors.email === 'string' && (
              <div id="feedback">{props.errors.email}</div>
            )}
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              margin="normal"
              variant="outlined"
              onChange={props.handleChange}
            />
            {props.errors.password && typeof props.errors.password === 'string' && (
              <div id="feedback">{props.errors.password}</div>
            )}
            <Button variant="outlined" color="primary" type="submit">
              Login
            </Button>
            <Button
              color="primary"
              variant="contained"
              style={{marginTop: 50, marginBottom: 100, fontSize: 20}}
              href={oauthEndpoint}
            >
              <LinkIcon style={{marginRight: 20}}/>
              Me connecter avec Reconnect Pro
            </Button>
          </StyledForm>
        )}
      />
    </Container>
  );
};

export default Login;
