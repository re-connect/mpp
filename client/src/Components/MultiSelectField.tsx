import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';

const MultiSelectField = ({id, label, value, setFieldValue, options}: any) => (
  <FormControl style={{flex: 1}}>
    <InputLabel id={id}>{label}</InputLabel>
    <Select
      labelId={id}
      id={id}
      multiple
      value={value}
      onChange={(event) => {
        setFieldValue(id, event.target.value);
      }}
      input={<Input id={id}/>}
      renderValue={(selected: any) => (
        <div>
          {selected.map((value: any) => {
            const selectedOption = options.find((option: any) => {
              return option['@id'] === value;
            });

            return (
              <Chip key={value} label={selectedOption.name}/>
            );
          })}
        </div>
      )}
    >
      {options.map((option: any) => (
        <MenuItem key={option['@id']} value={option['@id']}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default MultiSelectField;
