import { Entity } from './Entity';

export interface Note extends Entity{
  id?: number;
  content?: string;
  title?: string;
  date?: Date;
  nbFemaleGender?: number;
  nbMaleGender?: number;
  nbOtherGender?: number;
}
