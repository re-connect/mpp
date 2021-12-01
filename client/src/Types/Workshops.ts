import { ParticipantKind } from './ParticipantKinds';
import { EquipmentSupplier } from './EquipmentSuppliers';
import { AgeBreakpoint } from './AgeBreakpoints';
import { UsedEquipment } from './UsedEquipments';
import { Topic } from './Topics';
import { Skill } from './Skills';

export interface WorkshopInterface {
  date: Date | null;
  center: string | null;
  globalReport: string | null;
  nbParticipants: number | null;
  nbBeneficiariesAccounts: number | null;
  nbStoredDocs: number | null;
  nbCreatedEvents: number | null;
  nbCreatedContacts: number | null;
  nbCreatedNotes: number | null;
  author: string | null;
  usedVault: boolean | null;
  participantKinds: ParticipantKind[] | null;
  equipmentSuppliers: EquipmentSupplier[] | null;
  ageBreakpoints: AgeBreakpoint[] | null;
  usedEquipments: UsedEquipment[] | null;
  topics: Topic[] | null;
  skills: Skill[] | null;
}
