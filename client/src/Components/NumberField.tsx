import TextField from '@material-ui/core/TextField';
import React from 'react';


const NumberField = ({id, label, handleChange}: any) => (
    <TextField
        id={id}
        label={label}
        name={id}
        onChange={handleChange}
        type='number'
        variant='outlined'
        style={{marginLeft: 8, marginRight: 8, flex: 1}}
    />
);

export default NumberField;
