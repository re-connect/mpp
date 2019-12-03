import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import PersonIcon from "@material-ui/icons/Person";
import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import superagent, { Response } from "superagent";
import { centersEndpoint } from "../Services/requests";

const StyledContent = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
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
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Ma petite permanence
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
