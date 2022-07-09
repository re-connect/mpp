import * as React from 'react';
import { Note } from '../Types/Notes';

interface NotesContextInterface {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}

const defaultValues = {
  notes: [],
  setNotes: () => {
  },
};

const NotesContext = React.createContext<NotesContextInterface>(defaultValues);

export default NotesContext;
