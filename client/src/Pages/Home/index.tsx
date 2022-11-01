import {TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import React, {useState} from "react";
import styled from "styled-components";
import UseFetchDataEffect from "../../Hooks/UseFetchDataEffect";
import {centersEndpoint} from "../../Services/requests";
import CenterCard from "./Components/CenterCard";
import LabelChips from "./Components/LabelChips";
import Title from "../../Components/Title";
import Header from "../../Components/Header";

const StyledContent = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

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
    <>
      <Header/>
      <Container maxWidth="md">
        <StyledContent>
          <Title text="Centres"/>
          <LabelChips onClick={onClickTag}/>
          <TextField id="outlined-basic" label="Rechercher" variant="outlined" onChange={searchCenters}/>
          <Stack marginTop={3}>
            {!filteredCenters ? null : filteredCenters.map((center: any) =>
              <CenterCard center={center} key={center.id}/>
            )}
          </Stack>
        </StyledContent>
      </Container>
    </>
  );
};

export default Index;
