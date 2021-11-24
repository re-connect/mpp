import {EquipmentSupplier} from '../Types/EquipmentSuppliers';
import {createContext} from 'react';

interface EquipmentSuppliersContext {
  equipmentSuppliers: EquipmentSupplier[];
  setEquipmentSuppliers: (equipmentSupplier: EquipmentSupplier[]) => void;
}

const defaultValues = {
  equipmentSuppliers: [],
  setEquipmentSuppliers: () => {},
}

const EquipmentSuppliersContext = createContext<EquipmentSuppliersContext>(defaultValues);

export default EquipmentSuppliersContext;
