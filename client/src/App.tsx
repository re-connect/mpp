import {ThemeProvider} from '@material-ui/styles';
import {createTheme} from '@material-ui/core/styles';
import * as React from 'react';
import NotesContext from './Context/NotesContext';
import Routes from './Routes';
import {Note} from './Types/Notes';
import {Workshop} from './Types/Workshops';
import WorkshopsContext from './Context/WorkshopsContext';

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
  const [workshops, setWorkshops] = React.useState<Workshop[]>([]);

  return (
    <ThemeProvider theme={theme}>
          <WorkshopsContext.Provider value={{list: workshops, setWorkshops: setWorkshops}}>
              <NotesContext.Provider value={{notes, setNotes}}>
                  <Routes/>
              </NotesContext.Provider>
          </WorkshopsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
