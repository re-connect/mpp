export interface Center {
  id?: number;
  name?: string,
  notes?: string[],
  tags?: string[],
  permanence?: boolean,
  workshop?: boolean,
  workshops?: string[],
  beneficiariesCount?: number,
  createdBeneficiaryCount?: number,
  notesBeneficiariesCount?: number,
  notesStoredDocumentsCount?: number,
  storedDocumentsCount?: number,
  workshopsBeneficiariesCount?: number,
  workshopsStoredDocumentsCount?: number,
  workshopParticipantsCount?: number,
}
