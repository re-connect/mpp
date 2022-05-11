import { Entity } from './Entity';

export interface Note extends Entity{
  id?: number;
  content?: string;
  title?: string;
  date?: Date;
  femaleCount?: number;
  maleCount?: number;
  noGenderCount?: number;
}
