import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import React from 'react';


const DatePickerField = ({label, handleChange, value}: any) => <DatePicker
  slotProps={{textField: TextField}}
  format="dd/MM/yyyy"
  label={label}
  onChange={handleChange}
  value={value}
/>;

export default DatePickerField;
