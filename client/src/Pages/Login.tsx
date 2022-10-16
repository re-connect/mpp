import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinkIcon from '@mui/icons-material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styled from 'styled-components';
import {googleLoginEndpoint, loginEndpoint, oauthEndpoint} from '../Services/requests';
import logo from '../Images/logo.png';

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

const Login: React.FC = () => (
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

export default Login;
