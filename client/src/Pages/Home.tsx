import { Button, Chip, Fab, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ChartIcon from "@material-ui/icons/BarChartTwoTone";
import PersonIcon from "@material-ui/icons/Person";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { adminLoginEndpoint, centersEndpoint, makeRequest, tagsEndpoint } from "../Services/requests";

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


const StyledListItemContent = styled.div`
  background-color: #212121;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  padding: 10px;
  flex: 1;
  display: flex;
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

  const fetchCenters = useCallback(async () => {
    try {
      const { data } = await makeRequest(history, centersEndpoint);
      setCenters(data['hydra:member']);
      setFilteredCenters(data['hydra:member']);
    } catch (e) {
      history.push("/login");
    }
  }, [history]);

  const fetchTags = useCallback(async () => {
    try {
      const { data } = await makeRequest(history, tagsEndpoint);
      setTags(data['hydra:member']);
    } catch (e) {
      history.push("/login");
    }
  }, [history]);

  useEffect(() => {
    fetchCenters();
  }, [fetchCenters]);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);


  return (
    <Container maxWidth="sm">
      <StyledContent>
        <Logout
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/login");
          }}
        >
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
        <ChartsButton
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => history.push("/charts")}
        >
          <ChartIcon/>
        </ChartsButton>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          color="textPrimary"
        >
          Centres
        </Typography>
        <StyledChipsContainer>
          {tags.map((tag: any) => (
            <Chip
              label={tag.name}
              clickable
              color="secondary"
              onClick={() => onClickTag(tag.id)}
            />
          ))}
        </StyledChipsContainer>
        <TextField id="outlined-basic" label="Rechercher" variant="outlined" onChange={searchCenters}/>
        <List dense={false}>
          {filteredCenters.map((center: any) => (
            <ListItem
              key={center.id}
              onClick={() => history.push(`/notes/${center.id}`)}
            >
              <StyledListItemContent>
                <ListItemIcon>
                  <PersonIcon htmlColor="white"/>
                </ListItemIcon>
                <ListItemText primary={`${center.name}`}/>
              </StyledListItemContent>
            </ListItem>
          ))}
        </List>
      </StyledContent>
    </Container>
  );
};

export default Home;
