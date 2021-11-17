import {Workshop} from '../Types/Workshops';
import {createContext} from 'react';

interface WorkshopsContext {
    list: Workshop[];
    setWorkshops: (workshops: Workshop[]) => void;
}

const defaultValues = {
    list: [],
    setWorkshops: () => {},
};

const WorkshopsContext = createContext<WorkshopsContext>(defaultValues);

export default WorkshopsContext;
