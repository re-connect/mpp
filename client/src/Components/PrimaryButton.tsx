import React from 'react';
import Button from '@mui/material/Button';
import {ButtonProps} from "@mui/material/Button/Button";
import CircularProgress from "@mui/material/CircularProgress";

type Props = ButtonProps & {
  isLoading?: boolean,
}

const PrimaryButton: React.FC<Props> = (props: any) => (
  <Button
    variant='contained'
    color='primary'
    type='submit'
    disabled={props.isLoading}
    style={{margin: 8, flex: 1, color: 'white'}}
  >
    {props.isLoading ? <CircularProgress size={20}/> : null}
    {props.children}
  </Button>
)

export default PrimaryButton;
