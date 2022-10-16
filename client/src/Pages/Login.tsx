import Button from '@mui/material/Button';
import Github from '@mui/icons-material/GitHub';
import Container from '@mui/material/Container';
import LinkIcon from '@mui/icons-material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styled from 'styled-components';
import {googleLoginEndpoint, loginEndpoint, oauthEndpoint} from '../Services/requests';
import logo from '../Images/logo.png';
import Grid from "@mui/material/Unstable_Grid2";
import {Link, Tooltip} from "@mui/material";

const StyledImage = styled.img`
  width: 140px;
  height: 140px;
  align-self: center;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login: React.FC = () => (
    <div>
        <Grid container display="flex" justifyContent="end" p={2} pr={5}>
            <Tooltip title="Voir le code sur Github">
                <Link href="https://github.com/re-connect/mpp" target="_blank">
                    <Github/>
                </Link>
            </Tooltip>
        </Grid>
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
    </div>
);

export default Login;
