import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";

interface Props {
  href: string;
  Icon: React.FC;
  text: string;
}

const Link: React.FC<Props> = ({href, Icon, text}) => (
  <MuiLink component={RouterLink} to={href}>
    <Box mr={2} display="flex" alignItems="start">
      <span style={{marginRight: '1em'}}>{text}</span>
      <Icon/>
    </Box>
  </MuiLink>
);

export default Link