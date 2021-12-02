import { createContext } from 'react';
import { Skill } from '../Types/Skills';

interface SkillsContext {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}

const defaultValues = {
  skills: [],
  setSkills: () => {},
}

const SkillContext = createContext<SkillsContext>(defaultValues);

export default SkillContext;
