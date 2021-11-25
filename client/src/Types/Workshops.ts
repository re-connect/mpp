import {ParticipantKind} from './ParticipantKinds';
import {EquipmentSupplier} from './EquipmentSuppliers';
import {AgeBreakpoint} from './AgeBreakpoints';

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
  participantKinds: ParticipantKind[];
  equipmentSuppliers: EquipmentSupplier[];
  ageBreakpoints: AgeBreakpoint[];
}
