import { createContext } from 'react';

interface DropdownsContext {
  dropdowns: Object;
  setDropdowns: (dropdowns: Object) => void;
}

const defaultValues = {
  dropdowns: [],
  setDropdowns: () => {
  },
}

const DropdownContext = createContext<DropdownsContext>(defaultValues);

export default DropdownContext;
