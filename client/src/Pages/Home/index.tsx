import {Fab, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import ChartIcon from "@mui/icons-material/PieChart";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import UseFetchDataEffect from "../../Hooks/UseFetchDataEffect";
import {adminEndpoint, centersEndpoint, logoutEndpoint, makeRequest} from "../../Services/requests";
import CenterCard from "./Components/CenterCard";
import LabelChips from "./Components/LabelChips";
import Title from "../../Components/Title";

const StyledContent = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
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

const Index = () => {
  const navigate = useNavigate();
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

  const gotoAdmin = () => window.location.replace(adminEndpoint);
  const logout = async () => {
    await makeRequest(logoutEndpoint);
    window.location.replace(`/`);
  }

  return (
    <Container maxWidth="md">
      <StyledContent>
        <Logout onClick={logout}>Déconnexion</Logout>
        <Admin onClick={gotoAdmin}>Admin</Admin>
        <ChartsButton size="small" color="primary" aria-label="add" onClick={() => navigate("/charts")}>
          <ChartIcon/>
        </ChartsButton>
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
  );
};

export default Index;
