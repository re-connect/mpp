import {Tab, TextField} from "@mui/material";
import React, {useState} from "react";
import Page from "../../Components/Page";
import Title from "../../Components/Title";
import LabelChips from "./Components/LabelChips";
import UseFetchDataEffect from "../../Hooks/UseFetchDataEffect";
import {centersEndpoint} from "../../Services/requests";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Center} from "../../Types/Center";
import CentersTab from "./Components/CenntersTab";

const Index = () => {
  const [tabNumber, setTabNumber] = React.useState<string>('1');
  const [centers, setCenters] = useState<any[]>([]);
  const [filteredCenters, setFilteredCenters] = useState<any[]>([]);

  UseFetchDataEffect(centersEndpoint, (centers: any) => {
    setCenters(centers['hydra:member']);
    setFilteredCenters(centers['hydra:member'])
  });

  const searchCenters = (event: React.ChangeEvent<HTMLInputElement>) => setFilteredCenters(centers.filter((center: any) =>
    center.name.toLowerCase().includes(event.target.value.toLowerCase())
  ));

  const onClickTag = (id: number) => () => setFilteredCenters(centers.filter((center) =>
    center.tags.includes(`/api/tags/${id}`)
  ))

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabNumber(newValue);
  };

  return (
    <Page>
      <Container maxWidth="md">
        <TabContext value={tabNumber}>
          <Stack>
            <Title text="Centres"/>
            <LabelChips onClick={onClickTag}/>
            <TextField label="Rechercher" variant="outlined" onChange={searchCenters}/>
            <Stack alignItems="center">
              <TabList onChange={handleTabChange}>
                <Tab value="1" label="Tous"></Tab>
                <Tab value="2" label="Permanences"></Tab>
                <Tab value="3" label="Ateliers"></Tab>
              </TabList>
            </Stack>
            <TabPanel value="1">
              <CentersTab centers={filteredCenters}/>
            </TabPanel>
            <TabPanel value="2">
              <CentersTab centers={filteredCenters.filter((center: Center) => center.permanence)}/>
            </TabPanel>
            <TabPanel value="3">
              <CentersTab centers={filteredCenters.filter((center: Center) => center.workshop)}/>
            </TabPanel>
          </Stack>
        </TabContext>
      </Container>
    </Page>
  );
};

export default Index;
