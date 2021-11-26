import {Skill} from './Skills';

export interface Topic {
  id: number;
  content: string;
  skills: Skill[];
}
