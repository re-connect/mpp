import { Button, Chip, Fab, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ChartIcon from "@material-ui/icons/BarChart";
import HotelIcon from "@material-ui/icons/House";
import PeopleIcon from "@material-ui/icons/PeopleAlt";
import HomeWorkIcon from "@material-ui/icons/Work";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UseFetchDataEffect from "../Hooks/UseFetchDataEffect";
import { adminLoginEndpoint, centersEndpoint, tagsEndpoint } from "../Services/requests";

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
  const history = useHistory();
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
        <Logout onClick={() => { localStorage.removeItem("token"); history.push("/login") }}>
          Déconnexion
        </Logout>
        <Admin
          onClick={() => {
            const token = localStorage.getItem("token");
            window.location.replace(`${adminLoginEndpoint}?token=${token}`);
          }}
        >
          Admin
        </Admin>
        <ChartsButton size="small" color="primary" aria-label="add" onClick={() => history.push("/charts")}>
          <ChartIcon/>
        </ChartsButton>
        <Typography variant="h2" component="h2" gutterBottom color="textPrimary">
          Centres
        </Typography>
        <StyledChipsContainer>
          {tags.map((tag: any) => (
            <Chip label={tag.name} clickable color="secondary" onClick={() => onClickTag(tag.id)} />
          ))}
        </StyledChipsContainer>
        <TextField id="outlined-basic" label="Rechercher" variant="outlined" onChange={searchCenters}/>
        <List dense={false}>
          {filteredCenters.map((center: any) => (
            <ListItem key={center.id}>
                <ListItemIcon>
                  <HotelIcon htmlColor="white"/>
                </ListItemIcon>
                <ListItemText secondary={center.name}/>
              {!center.permanence ? null :
                <StyledListItemContent style={{
                  textAlign: 'center',
                  width: 200,
                  }} onClick={() => history.push(`/notes/${center.id}`)}>
                    <PeopleIcon htmlColor="white"/>
                  <ListItemText primary="Permanences"/>
                </StyledListItemContent>
              }
              {!center.workshop ? null :
                <StyledListItemContent style={{
                  marginLeft: 8,
                  textAlign: 'center',
                  width: 200,
                  }} onClick={() => history.push(`/workshops/${center.id}`)}>
                    <HomeWorkIcon htmlColor="white"/>
                  <ListItemText primary="Ateliers" />
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
