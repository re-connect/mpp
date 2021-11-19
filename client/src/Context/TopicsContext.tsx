import * as React from 'react';
import {Topic} from '../Types/Topics';

interface TopicsContext {
    listTopics: Topic[];
    setTopics: (topics: Topic[]) => void;
}

const defaultValues = {
    listTopics: [],
    setTopics: () => {},
};

const TopicsContext = React.createContext<TopicsContext>(defaultValues);

export default TopicsContext;
