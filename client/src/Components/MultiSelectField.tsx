import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import React, { useContext } from 'react';
import DropdownsContext from "../Context/DropdownsContext";
import { getDropdownOptionsArray } from "../Services/dropdowns";

const MultiSelectField = ({id, label, value, setFieldValue, required = false}: any) => {
  const {dropdowns} = useContext(DropdownsContext);
  const dropdownOptions = getDropdownOptionsArray(dropdowns, id);
  const options = !dropdownOptions ? [] : dropdownOptions;

  return (
    <FormControl style={{marginLeft: 8, marginRight: 8, flex: 1}}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        multiple
        value={!value ? [] : value}
        required={required}
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
                <Chip key={value} label={!selectedOption ? '' : selectedOption.name}/>
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
}

export default MultiSelectField;
