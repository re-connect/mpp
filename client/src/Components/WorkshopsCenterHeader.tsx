import React from 'react';
import Text from "./Text";
import Grid2 from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import Link from "./Link";
import Title from "./Title";

interface Props {
  center: any;
}

const WorkshopsCenterHeader: React.FC<Props> = ({center}) => (
  <Grid2 container columns={2}>
    <Grid2>
      <Text text={`Nb d'ateliers : ${!center.workshops ? 0 : center.workshops.length}`}/>
      <Text text={`Nb CFN crées : ${center.workshopsBeneficiariesCount ?? 0}`}/>
      <Text text={`Nb docs stockés : ${center.workshopsStoredDocumentsCount ?? 0}`}/>
    </Grid2>
    <Grid2 flexGrow={1}/>
    <Grid2>
      <Link
        href={`/centers/${center.id}/create-workshop`}
        text="Ajouter un atelier"
        Icon={AddIcon}
      />
    </Grid2>
    <Grid2>
      <Title text="Accompagnements numérique" variant="h4"/>
    </Grid2>
  </Grid2>
);

export default WorkshopsCenterHeader;
