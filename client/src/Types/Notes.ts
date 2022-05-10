import { Gender } from './Gender';
import { Entity } from './Entity';

export interface Note extends Entity{
  id?: number;
  content?: string;
  title?: string;
  date?: Date;
  genders?: Gender[];
}
