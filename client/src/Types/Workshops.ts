import { AgeBreakpoint } from './AgeBreakpoints';
import { Entity } from './Entity';
import { EquipmentSupplier } from './EquipmentSuppliers';
import { ParticipantKind } from './ParticipantKinds';
import { Skill } from './Skills';
import { Topic } from './Topics';
import { UsedEquipment } from './UsedEquipments';

export interface WorkshopInterface extends Entity {
  id?: number;
  date?: Date;
  center?: string;
  globalReport?: string;
  nbParticipants?: number;
  nbBeneficiariesAccounts?: number;
  nbStoredDocs?: number;
  nbCreatedEvents?: number;
  nbCreatedContacts?: number;
  nbCreatedNotes?: number;
  author?: string;
  usedVault?: boolean;
  participantKinds?: ParticipantKind[];
  equipmentSuppliers?: EquipmentSupplier[];
  ageBreakpoints?: AgeBreakpoint[];
  usedEquipments?: UsedEquipment[];
  topics?: Topic[];
  skills?: Skill[];
}
