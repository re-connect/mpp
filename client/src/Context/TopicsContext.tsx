import {createContext} from 'react';
import {Topic} from "../Types/Topics";

interface TopicsContext {
  topics: Topic[];
  setTopics: (workshops: Topic[]) => void;
}

const defaultValues = {
  topics: [],
  setTopics: () => {},
};

const TopicsContext = createContext<TopicsContext>(defaultValues);

export default TopicsContext;
