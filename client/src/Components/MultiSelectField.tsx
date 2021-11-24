import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';

const MultiSelectField = ({id, label, value, setFieldValue}: any) => (
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
      input={<Input id={id} />}
      renderValue={(selected: any) => (
        <div>
          {selected.map((value: any) => (
            <Chip key={value} label={value}/>
          ))}
        </div>
      )}
    >
      {['sujet1', 'sujet2', 'sujet3'].map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default MultiSelectField;
