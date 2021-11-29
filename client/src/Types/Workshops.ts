import {ParticipantKind} from './ParticipantKinds';
import {EquipmentSupplier} from './EquipmentSuppliers';
import {AgeBreakpoint} from './AgeBreakpoints';
import {UsedEquipment} from './UsedEquipments';
import {Topic} from './Topics';
import {Skill} from './Skills';

export interface Workshop {
  id: number;
  content: string;
  date: Date;
}

export interface WorkshopInterface {
  date: Date;
  center: string;
  globalReport: string;
  nbParticipants: number;
  nbBeneficiariesAccounts: number;
  nbStoredDocs: number;
  nbCreatedEvents: number;
  nbCreatedContacts: number;
  nbCreatedNotes: number;
  author: string;
  usedVault: boolean;
  participantKinds: ParticipantKind[];
  equipmentSuppliers: EquipmentSupplier[];
  ageBreakpoints: AgeBreakpoint[];
  usedEquipments: UsedEquipment[];
  topics: Topic[];
  skills: Skill[];
}
