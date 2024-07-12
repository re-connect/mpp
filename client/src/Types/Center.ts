export interface Center {
  id?: number;
  name?: string,
  enabled?: boolean,
  notes?: string[],
  tags?: string[],
  permanence?: boolean,
  workshop?: boolean,
  workshops?: string[],
  beneficiariesCount?: number,
  createdBeneficiaryCount?: number,
  permanencesBeneficiariesCount?: number,
  permanencesStoredDocumentsCount?: number,
  storedDocumentsCount?: number,
  workshopsBeneficiariesCount?: number,
  workshopsStoredDocumentsCount?: number,
  workshopParticipantsCount?: number,
}
