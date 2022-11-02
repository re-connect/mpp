import React from 'react';
import {Typography} from "@mui/material";

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({text}) => (
  <Typography variant="body1" color="textPrimary">
    {text}
  </Typography>
);

export default Title;
