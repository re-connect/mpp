import * as React from 'react';
import { Note } from '../Types/Notes';

interface NotesContext {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}

const defaultValues = {
  notes: [],
  setNotes: () => {},
};

const NotesContext = React.createContext<NotesContext>(defaultValues);

export default NotesContext;
