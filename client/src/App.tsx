import {ThemeProvider} from '@material-ui/styles';
import {createTheme} from '@material-ui/core/styles';
import * as React from 'react';
import NotesContext from './Context/NotesContext';
import Routes from './Routes';
import {Note} from './Types/Notes';

const theme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#28ad7a',
      paper: '#28ad7a',
    },
    text: {
      primary: '#eff1f7',
      secondary: '#eff1f7',
    },
    primary: {
      main: '#eff1f7',
      contrastText: '#677273',
    },
  },
});

const App = () => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <NotesContext.Provider value={{list: notes, set: setNotes}}>
        <Routes/>
      </NotesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
