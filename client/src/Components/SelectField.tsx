import React, { useContext } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import DropdownsContext from '../Context/DropdownsContext';
import { getDropdownOptionsArray } from '../Services/dropdowns';

const SelectField = ({id, label, value, setFieldValue, required}: any) => {
  const {dropdowns} = useContext(DropdownsContext);
  const dropdownOptions = getDropdownOptionsArray(dropdowns, `${id}s`);
  const options = !dropdownOptions ? [] : dropdownOptions;

  return (
    <FormControl style={{flex: 1}}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={!value ? [] : value}
        required={required}
        onChange={(event) => {
          setFieldValue(id, event.target.value);
        }}
      >
        {options.map((option: any) => (
          <MenuItem key={option['@id']} value={option['@id']}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectField;
