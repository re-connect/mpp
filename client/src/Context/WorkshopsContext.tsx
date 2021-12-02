import { WorkshopInterface } from '../Types/Workshops';
import { createContext } from 'react';

interface WorkshopsContext {
    workshops: WorkshopInterface[];
    setWorkshops: (workshops: WorkshopInterface[]) => void;
}

const defaultValues = {
    workshops: [],
    setWorkshops: () => {},
};

const WorkshopsContext = createContext<WorkshopsContext>(defaultValues);

export default WorkshopsContext;
