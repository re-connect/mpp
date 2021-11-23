import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';


const DatePickerField = ({label, handleChange, value}: any) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      disableToolbar
      format='dd/MM/yyyy'
      margin='normal'
      id='date-picker-inline'
      label={label}
      onChange={handleChange}
      variant='inline'
      value={value}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  </MuiPickersUtilsProvider>
);

export default DatePickerField;
