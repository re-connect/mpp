import { Button, Chip, Fab, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ChartIcon from "@mui/icons-material/PieChart";
import HomeWorkIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import PeopleIcon from "@mui/icons-material/People";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UseFetchDataEffect from "../Hooks/UseFetchDataEffect";
import { adminEndpoint, centersEndpoint, logoutEndpoint, makeRequest, tagsEndpoint } from "../Services/requests";

const StyledContent = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledChipsContainer = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;
  justify-content: space-around;
`;


const StyledListItemContent = styled.a`
  background-color: #212121;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  padding: 10px;
`;

const ChartsButton = styled(Fab)`
  position: absolute !important;
  right: 10px;
  top: 10px;
`;

const Logout = styled(Button)`
  position: absolute !important;
  right: 100px;
  top: 10px;
`;

const Admin = styled(Button)`
  position: absolute !important;
  left: 50px;
  top: 10px;
`;

const Home = () => {
  const navigate = useNavigate();
  const [centers, setCenters] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [filteredCenters, setFilteredCenters] = useState<any[]>([]);

  UseFetchDataEffect(centersEndpoint, (centers: any) => {
    setCenters(centers['hydra:member']);
    setFilteredCenters(centers['hydra:member'])
  });
  UseFetchDataEffect(tagsEndpoint, (data: any) => setTags(data['hydra:member']));

  const searchCenters = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setFilteredCenters(centers.filter((center: any) =>
      center.name.toLowerCase().includes(search.toLowerCase())
    ));
  }

  const onClickTag = (id: number) => {
    setFilteredCenters(centers.filter((center) =>
      center.tags.includes(`/api/tags/${id}`)
    ))
  }

  return (
    <Container maxWidth="md">
      <StyledContent>
        <Logout onClick={async () => {
          await makeRequest(logoutEndpoint);
          window.location.replace(`/`);
        }}>
          Déconnexion
        </Logout>
        <Admin
          onClick={() => {
            window.location.replace(adminEndpoint);
          }}
        >
          Admin
        </Admin>
        <ChartsButton size="small" color="primary" aria-label="add" onClick={() => navigate("/charts")}>
          <ChartIcon/>
        </ChartsButton>
        <Typography variant="h2" component="h2" gutterBottom color="textPrimary">
          Centres
        </Typography>
        <StyledChipsContainer>
          {!tags ? null : tags.map((tag: any) => (
            <Chip key={tag.id} label={tag.name} clickable color="secondary" onClick={() => onClickTag(tag.id)}/>
          ))}
        </StyledChipsContainer>
        <TextField id="outlined-basic" label="Rechercher" variant="outlined" onChange={searchCenters}/>
        <List dense={false}>
          {!filteredCenters ? null : filteredCenters.map((center: any) => (
            <ListItem key={center.id}>
              <ListItemIcon>
                <HotelIcon htmlColor="white"/>
              </ListItemIcon>
              <ListItemText secondary={center.name}/>
              {!center.permanence ? null :
                <StyledListItemContent style={{
                  textAlign: 'center',
                  width: 200,
                }} onClick={() => navigate(`/centers/${center.id}/notes`)}>
                  <PeopleIcon htmlColor="white"/>
                  <ListItemText secondary="Permanences Coffre-fort numérique"/>
                </StyledListItemContent>
              }
              {!center.workshop ? null :
                <StyledListItemContent style={{
                  marginLeft: 8,
                  textAlign: 'center',
                  width: 200,
                }} onClick={() => navigate(`/centers/${center.id}/workshops`)}>
                  <HomeWorkIcon htmlColor="white"/>
                  <ListItemText secondary="Accompagnements numérique (individuel ou collectif)"/>
                </StyledListItemContent>
              }
            </ListItem>
          ))}
        </List>
      </StyledContent>
    </Container>
  );
};

export default Home;
