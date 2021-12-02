import { Skill } from './Skills';
import { Entity } from "./Entity";

export interface Topic extends Entity {
  '@id': string;
  id: number;
  content: string;
  skills: Skill[];
}
