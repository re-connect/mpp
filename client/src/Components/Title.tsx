import React from 'react';
import {Typography} from "@mui/material";

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({text}) => (
  <Typography variant="h2" component="h2" gutterBottom color="textPrimary">
    {text}
  </Typography>
);

export default Title;
