export interface Center {
  id: number;
  name: string,
  notes: string[],
  tags: string[],
  permanence: boolean,
  workshop: boolean,
  workshops: string[],
  beneficiaryCount: number,
  createdBeneficiaryCount: number,
  documentsCount: number
}