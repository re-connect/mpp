import { Entity } from './Entity';

export interface Permanence extends Entity{
  id?: number;
  content?: string;
  title?: string;
  date?: Date;
  femaleCount?: number;
  maleCount?: number;
  noGenderCount?: number;
}
