import { createContext } from 'react';
import { Dropdowns } from "../Types/Dropdowns";

interface DropdownsContext {
  dropdowns: Dropdowns;
  setDropdowns: (dropdowns: Dropdowns) => void;
}

const defaultValues = {
  dropdowns: {},
  setDropdowns: () => {
  },
}

const DropdownContext = createContext<DropdownsContext>(defaultValues);

export default DropdownContext;
