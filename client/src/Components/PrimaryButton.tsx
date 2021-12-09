import React from 'react';
import { Button } from '@material-ui/core';

const PrimaryButton = (props: any) => (
  <Button
    variant='contained'
    color='primary'
    type='submit'
    disabled={props.disabled}
    style={{margin: 8, flex: 1}}
  >
    {props.children}
  </Button>
)

export default PrimaryButton;
