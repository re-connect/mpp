import Chip from '@mui/material/Chip';
import React, { useContext } from 'react';
import DropdownsContext from "../Context/DropdownsContext";
import { getDropdownNameFromIri, getDropdownValues } from "../Services/dropdowns";

interface ChipListProps {
  list: string[];
  dropdownKind?: string;
}

const ChipList: React.FC<ChipListProps> = ({list, dropdownKind}) => {
  const {dropdowns} = useContext(DropdownsContext);
  const dropdown = !dropdownKind ? {} : getDropdownValues(dropdowns, dropdownKind);

  return (
    <>
      {list.map((listItem: string) => (
        <Chip key={listItem} label={getDropdownNameFromIri(dropdown, listItem)} variant='outlined'/>
      ))}
    </>
  );
}

export default ChipList;
