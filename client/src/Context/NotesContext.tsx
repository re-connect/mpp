import * as React from 'react';
import { Note } from '../Types/Notes';

interface NotesContext {
  list: Note[];
  set: (notes: Note[]) => void;
}

const defaultValues = {
  list: [],
  set: () => {},
};

const NotesContext = React.createContext<NotesContext>(defaultValues);

export default NotesContext;
