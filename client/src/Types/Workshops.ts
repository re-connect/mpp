import { AgeBreakpoint } from './AgeBreakpoints';
import { Entity } from './Entity';
import { EquipmentSupplier } from './EquipmentSuppliers';
import { ParticipantKind } from './ParticipantKinds';
import { Skill } from './Skills';
import { Topic } from './Topics';
import { UsedEquipment } from './UsedEquipments';
import { Duration } from './Durations';

export interface WorkshopInterface extends Entity {
  id?: number;
  date?: Date;
  place?: string;
  center?: string;
  nbParticipants?: number;
  nbNewParticipants?: number;
  femaleCount?: number;
  maleCount?: number;
  noGenderCount?: number;
  nbBeneficiariesAccounts?: number;
  nbStoredDocs?: number;
  nbCreatedEvents?: number;
  nbCreatedContacts?: number;
  nbCreatedNotes?: number;
  author?: string;
  usedVault?: boolean;
  attendees?: string;
  improvementAxis?: string;
  duration?: Duration;
  participantKinds?: ParticipantKind[];
  equipmentSuppliers?: EquipmentSupplier[];
  ageBreakpoints?: AgeBreakpoint[];
  usedEquipments?: UsedEquipment[];
  topics?: Topic[];
  skills?: Skill[];
}
