import React from "react";
import {Center} from "../../../Types/Center";
import Stack from "@mui/material/Stack";
import CenterCard from "./CenterCard";

interface Props {
  centers: Array<Center>;
}

const CentersTab: React.FC<Props> = ({centers}) => {
  if (!centers) return null;

  return (
    <Stack marginTop={1}>
      {centers.map((center: any) =>
        <CenterCard center={center} key={center.id}/>
      )}
    </Stack>
  );
}

export default CentersTab;
