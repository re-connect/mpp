import React from 'react';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

export const HomeButton = (props: any) => (
  <Button
    onClick={() => props.history.push(`/`)}
    style={{position: 'absolute', left: 140, top: 10}}
  >
    <HomeIcon/>Accueil
  </Button>
)

export default HomeButton;