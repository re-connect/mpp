import {
  Button,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ChartIcon from "@material-ui/icons/BarChartTwoTone";
import PersonIcon from "@material-ui/icons/Person";
import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import superagent, { Response } from "superagent";
import logo from "../Images/logo.png";
import { centersEndpoint } from "../Services/requests";

const StyledContent = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 140px;
  height: 140px;
  align-self: center;
  margin-bottom: 50px;
`;

const StyledListItemContent = styled.div`
  background-color: #009688;
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

const Home = withRouter(({ history }: any) => {
  const [centers, setCenters] = useState<any[]>([]);
  const fetchCenters = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      superagent
        .get(centersEndpoint)
        .set("Authorization", `Bearer ${token}`)
        .then((response: Response) => {
          console.log("response");
          setCenters(response.body);
        })
        .catch(error => {
          history.push("/login");
        });
    } else {
      console.log("no token");
      history.push("/login");
    }
  }, [history]);

  useEffect(() => {
    fetchCenters();
  }, [fetchCenters]);

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
        <ChartsButton
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => history.push("/charts")}
        >
          <ChartIcon />
        </ChartsButton>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Ma petite permanence
        </Typography>
        <StyledImage src={logo} alt="logo" />
        <Divider style={{ marginBottom: 24 }} />
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          color="textSecondary"
        >
          Centres
        </Typography>
        <List dense={false}>
          {centers.map((center: any) => (
            <ListItem
              key={center.id}
              onClick={() => history.push(`/notes/${center.id}`)}
            >
              <StyledListItemContent>
                <ListItemIcon>
                  <PersonIcon htmlColor="white" />
                </ListItemIcon>
                <ListItemText primary={`${center.name}`} />
              </StyledListItemContent>
            </ListItem>
          ))}
        </List>
      </StyledContent>
    </Container>
  );
});

export default Home;
