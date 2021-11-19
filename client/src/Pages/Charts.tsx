import {Fab, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import HomeIcon from "@material-ui/icons/Home";
import "chart.js";
import React, {useCallback, useContext, useEffect} from "react";
import {LineChart} from "react-chartkick";
import {withRouter} from "react-router-dom";
import styled from "styled-components";
import superagent, {Response} from "superagent";
import NotesContext from "../Context/NotesContext";
import {notesEndpoint} from "../Services/requests";

const HomeButton = styled(Fab)`
  position: absolute !important;
  right: 10px;
  top: 10px;
`;

const Charts = withRouter(({history, match}: any) => {
  const notesContext = useContext(NotesContext);

  const fetchNotes = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      superagent
        .get(`${notesEndpoint}`)
        .set("Authorization", `Bearer ${token}`)
        .then((response: Response) => {
          notesContext.setNotes(response.body['hydra:member']);
        });
    } else {
      history.push("/login");
    }
  }, [history, notesContext]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  let nbProAccountsData = {};
  let nbBeneficiariesAccountsData = {};
  let nbStoredDocsData = {};

  notesContext.notes.forEach((note: any, index: number) => {
    nbProAccountsData = {
      ...nbProAccountsData,
      [note.date]: note.nbProAccounts
    };
    nbBeneficiariesAccountsData = {
      ...nbBeneficiariesAccountsData,
      [note.date]: note.nbBeneficiariesAccounts
    };
    nbStoredDocsData = {...nbStoredDocsData, [note.date]: note.nbStoredDocs};
  });

  return (
    <Container maxWidth="sm">
      <HomeButton
        size="small"
        color="primary"
        aria-label="add"
        onClick={() => history.push("")}
      >
        <HomeIcon/>
      </HomeButton>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        color="textPrimary"
      >
        Statistiques
      </Typography>
      <Typography variant="h5" gutterBottom color="textPrimary">
        Nombre de comptes bénéficiaires crées par permanence
      </Typography>
      <LineChart data={nbBeneficiariesAccountsData} colors={["white"]}/>
      <Typography variant="h5" gutterBottom color="textPrimary">
        Nombre de comptes pros crées par permanence
      </Typography>
      <LineChart data={nbProAccountsData} colors={["#d35400"]}/>
      <Typography variant="h5" gutterBottom color="textPrimary">
        Nombre de documents stockés par permanence
      </Typography>
      <LineChart data={nbStoredDocsData} colors={["#8e44ad"]}/>
    </Container>
  );
});

export default Charts;
