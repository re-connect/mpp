import React from 'react';
import Title from "./Title";
import Grid2 from "@mui/material/Unstable_Grid2";
import PermanencesCenterHeader from "./PermanencesCenterHeader";
import WorkshopsCenterHeader from "./WorkshopsCenterHeader";
import {Divider} from "@mui/material";

interface Props {
  center: any;
  permanences?: boolean;
  workshops?: boolean;
}

const CenterHeader: React.FC<Props> = ({center, permanences, workshops}) => {
  if (!center) return null;

  return (
    <Grid2 mb={2}>
      <Grid2>
        <Title text={!center.name ? '' : center.name}/>
      </Grid2>
      {!permanences ? null : <PermanencesCenterHeader center={center}/>}
      {!workshops ? null : <WorkshopsCenterHeader center={center}/>}
      <Divider/>
    </Grid2>
  );
}

export default CenterHeader;
