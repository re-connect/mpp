import {createContext} from 'react';
import {AgeBreakpoint} from '../Types/AgeBreakpoints';

interface AgeBreakpointsContext {
  ageBreakpoints: AgeBreakpoint[];
  setAgeBreakpoints: (ageBreakpoints: AgeBreakpoint[]) => void;
}

const defaultValues = {
  ageBreakpoints: [],
  setAgeBreakpoints: () => {},
}

const AgeBreakpointsContext = createContext<AgeBreakpointsContext>(defaultValues);

export default AgeBreakpointsContext;
