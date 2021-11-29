import { Workshop } from '../Types/Workshops';
import { createContext } from 'react';

interface WorkshopsContext {
    workshops: Workshop[];
    setWorkshops: (workshops: Workshop[]) => void;
}

const defaultValues = {
    workshops: [],
    setWorkshops: () => {},
};

const WorkshopsContext = createContext<WorkshopsContext>(defaultValues);

export default WorkshopsContext;
