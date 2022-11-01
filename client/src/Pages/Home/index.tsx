import {TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import React, {useState} from "react";
import UseFetchDataEffect from "../../Hooks/UseFetchDataEffect";
import {centersEndpoint} from "../../Services/requests";
import CenterCard from "./Components/CenterCard";
import LabelChips from "./Components/LabelChips";
import Title from "../../Components/Title";
import Page from "../../Components/Page";

const Index = () => {
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

  return (
    <Page>
      <Container maxWidth="md">
        <Stack flexDirection="column">
          <Title text="Centres"/>
          <LabelChips onClick={onClickTag}/>
          <TextField label="Rechercher" variant="outlined" onChange={searchCenters}/>
          <Stack marginTop={3}>
            {!filteredCenters ? null : filteredCenters.map((center: any) =>
              <CenterCard center={center} key={center.id}/>
            )}
          </Stack>
        </Stack>
      </Container>
    </Page>
  );
};

export default Index;
