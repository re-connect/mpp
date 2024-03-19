import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import 'chartkick/chart.js'
import React, {useContext} from "react";
import {LineChart} from "react-chartkick";
import PermanencesContext from "../Context/PermanencesContext";
import {permanencesEndpoint} from "../Services/requests";
import UseFetchDataEffect from "../Hooks/UseFetchDataEffect";

const Charts = () => {
  const permanencesContext = useContext(PermanencesContext);
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr', {year: "numeric", month: "short", day: "2-digit"});
  }

  UseFetchDataEffect(`${permanencesEndpoint}`, (data: any) => {
    permanencesContext.setPermanences(data['hydra:member']);
  })

  let nbProAccountsData = {};
  let nbBeneficiariesAccountsData = {};
  let nbStoredDocsData = {};

  permanencesContext.permanences.forEach((permanence: any) => {
    nbProAccountsData = {
      [formatDate(permanence.date)]: permanence.nbProAccounts,
      ...nbProAccountsData,
    };
    nbBeneficiariesAccountsData = {
      [formatDate(permanence.date)]: permanence.nbBeneficiariesAccounts,
      ...nbBeneficiariesAccountsData,
    };
    nbStoredDocsData = {[formatDate(permanence.date)]: permanence.nbStoredDocs, ...nbStoredDocsData};
  });

  return (
    <Container maxWidth="sm">
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
};

export default Charts;
