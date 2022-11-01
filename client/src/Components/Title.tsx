import React from 'react';
import {Typography} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";

interface Props {
  text: string;
  variant?: Variant;
}

const Title: React.FC<Props> = ({text, variant}) => (
  <Typography
    variant={variant ?? "h2"}
    gutterBottom
    color="textPrimary"
  >
    {text}
  </Typography>
);

export default Title;
