import { WorkshopInterface } from '../Types/Workshops';
import { createContext } from 'react';

interface WorkshopsContextInterface {
  workshops: WorkshopInterface[];
  setWorkshops: (workshops: WorkshopInterface[]) => void;
}

const defaultValues = {
  workshops: [],
  setWorkshops: () => {
  },
};

const WorkshopsContext = createContext<WorkshopsContextInterface>(defaultValues);

export default WorkshopsContext;
