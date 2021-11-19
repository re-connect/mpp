import * as React from 'react';
import {Topic} from '../Types/Topics';

interface TopicsContext {
    topics: Topic[];
    setTopics: (topics: Topic[]) => void;
}

const defaultValues = {
    topics: [],
    setTopics: () => {},
};

const TopicsContext = React.createContext<TopicsContext>(defaultValues);

export default TopicsContext;
