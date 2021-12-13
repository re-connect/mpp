import TextField from '@material-ui/core/TextField';
import React from 'react';

const FormTextField = ({id, label, value, handleChange, rows, multiline= false, required= false}: any) => (
  <TextField
    id={id}
    name={id}
    type='text'
    label={label}
    variant='outlined'
    value={value}
    onChange={handleChange}
    rows={rows}
    multiline={multiline}
    required={required}
    style={{marginLeft: 8, marginRight: 8, flex: 1}}
  />
)

export default FormTextField;
