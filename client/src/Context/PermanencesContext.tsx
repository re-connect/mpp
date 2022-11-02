import * as React from 'react';
import {Permanence} from "../Types/Permanence";

interface PermanencesContextInterface {
  permanences: Permanence[];
  setPermanences: (permanences: Permanence[]) => void;
}

const defaultValues = {
  permanences: [],
  setPermanences: () => {
  },
};

const PermanencesContext = React.createContext<PermanencesContextInterface>(defaultValues);

export default PermanencesContext;
