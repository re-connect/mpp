import {Workshop} from '../Types/Workshops';
import {createContext} from 'react';

interface WorkshopsContext {
    list: Workshop[];
    set: (workshops: Workshop[]) => void;
}

const defaultValues = {
    list: [],
    set: () => {},
};

const WorkshopsContext = createContext<WorkshopsContext>(defaultValues);

export default WorkshopsContext;
