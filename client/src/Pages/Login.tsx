import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinkIcon from '@mui/icons-material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {dropdownsEndpoint, googleLoginEndpoint, loginEndpoint, makeRequest, oauthEndpoint} from '../Services/requests';
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
    const {setDropdowns} = useContext(DropdownsContext);
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
                    color="textPrimary"
                >
                    Ma petite permanence
                </Typography>
                <StyledImage src={logo} alt="logo"/>
            </StyledImageContainer>
            <Button
                color="primary"
                variant="contained"
                size="large"
                style={{marginTop: 50, fontSize: 20, width: '100%', minHeight: '120px'}}
                href={oauthEndpoint}
            >
                <LinkIcon style={{marginRight: 20}}/>
                Me connecter avec Reconnect Pro
            </Button>
            <Button
                color="primary"
                variant="contained"
                size="large"
                style={{marginTop: 50, fontSize: 20, width: '100%', minHeight: '120px'}}
                href={googleLoginEndpoint}
            >
                <LinkIcon style={{marginRight: 20}}/>
                Me connecter avec Google
            </Button>
            <Button
                color="primary"
                variant="contained"
                size="large"
                style={{marginTop: 50, marginBottom: 100, fontSize: 20, width: '100%', minHeight: '120px'}}
                href={loginEndpoint}
            >
                <LinkIcon style={{marginRight: 20}}/>
                Me connecter avec username et password
            </Button>
        </Container>
    );
};

export default Login;
