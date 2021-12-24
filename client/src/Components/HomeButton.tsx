import React from 'react';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

export const HomeButton = () => {
  const history = useHistory();

  return (
    <Button
      onClick={() => history.push(`/`)}
    >
      <HomeIcon/>Accueil
    </Button>
  )
}

export default HomeButton;
