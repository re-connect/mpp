import { Skill } from './Skills';

export interface Topic {
  '@id': string;
  id: number;
  content: string;
  skills: Skill[];
}
