import React from "react";
import Button from "@mui/material/Button";
import {adminEndpoint, logoutEndpoint, makeRequest} from "../Services/requests";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import {Toolbar} from "@mui/material";
import colors from "../colors";
import {AdminPanelSettings as AdminIcon, Logout as LogoutIcon} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import Stack from "@mui/material/Stack";

interface IconProps {
  text: string;
  onClick: () => void;
  Icon: React.FC;
}

const HeaderIcon: React.FC<IconProps> = ({text, onClick, Icon}) => (
  <Button
    style={{color: colors.white}}
    onClick={onClick}
  >
    <Icon/>
    <Stack ml={1}>{text}</Stack>
  </Button>
);

const Header: React.FC = () => {
  const navigate = useNavigate();
  const gotoAdmin = () => window.location.replace(adminEndpoint);
  const logout = async () => {
    await makeRequest(logoutEndpoint);
    window.location.replace(`/`);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderIcon text="Accueil" onClick={() => navigate(`/`)} Icon={HomeIcon}/>
          <Stack flexGrow={1}/>
          <HeaderIcon text="Admin" onClick={gotoAdmin} Icon={AdminIcon}/>
          <HeaderIcon text="Déconnexion" onClick={logout} Icon={LogoutIcon}/>
        </Toolbar>
      </Container>
    </AppBar>
  )
    ;
}

export default Header;
