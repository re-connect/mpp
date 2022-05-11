import { Fab, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import HomeIcon from "@material-ui/icons/Home";
import "chart.js";
import React, { useContext } from "react";
import { LineChart } from "react-chartkick";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import NotesContext from "../Context/NotesContext";
import { notesEndpoint } from "../Services/requests";
import UseFetchDataEffect from "../Hooks/UseFetchDataEffect";

const HomeButton = styled(Fab)`
  position: absolute !important;
  right: 10px;
  top: 10px;
`;

const Charts = withRouter(({history}: any) => {
  const notesContext = useContext(NotesContext);
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr', {year: "numeric", month: "short", day: "2-digit"});
  }

  UseFetchDataEffect(`${notesEndpoint}`, (data: any) => {
    notesContext.setNotes(data['hydra:member']);
  })

  let nbProAccountsData = {};
  let nbBeneficiariesAccountsData = {};
  let nbStoredDocsData = {};

  notesContext.notes.forEach((note: any, index: number) => {
    nbProAccountsData = {
      [formatDate(note.date)]: note.nbProAccounts,
      ...nbProAccountsData,
    };
    nbBeneficiariesAccountsData = {
      [formatDate(note.date)]: note.nbBeneficiariesAccounts,
      ...nbBeneficiariesAccountsData,
    };
    nbStoredDocsData = {[formatDate(note.date)]: note.nbStoredDocs, ...nbStoredDocsData};
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
