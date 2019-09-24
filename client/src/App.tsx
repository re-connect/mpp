import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import NotesContext from './Context/NotesContext';
import Routes from './Routes';
import { Note } from './Types/Notes';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#54D69E',
      main: '#1ABD9C',
      dark: '#148F76',
      contrastText: '#fff',
    },
  },
});

const App = () => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <NotesContext.Provider value={{ list: notes, set: setNotes }}>
        <Routes />
      </NotesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
