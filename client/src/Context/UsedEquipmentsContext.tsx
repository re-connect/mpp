import {createContext} from 'react';
import {UsedEquipment} from '../Types/UsedEquipments';

interface UsedEquipmentsContext {
  usedEquipments: UsedEquipment[];
  setUsedEquipments: (usedEquipment: UsedEquipment[]) => void;
}

const defaultValues = {
  usedEquipments: [],
  setUsedEquipments: () => {},
}

const UsedEquipmentsContext = createContext<UsedEquipmentsContext>(defaultValues);

export default UsedEquipmentsContext;
