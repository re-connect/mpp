import React, {useContext} from 'react';
import DropdownsContext from '../Context/DropdownsContext';
import {getDropdownNameFromIri, getDropdownValues} from '../Services/dropdowns';

const DropdownSingleValue = ({iri, dropdownKind}: any) => {
  const {dropdowns} = useContext(DropdownsContext);
  const dropdown = !dropdownKind ? {} : getDropdownValues(dropdowns, dropdownKind);

  return (
    <>
      <span>{getDropdownNameFromIri(dropdown, iri)}</span>
    </>
  );
}

export default DropdownSingleValue;
