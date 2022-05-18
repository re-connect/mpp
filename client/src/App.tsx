import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import NotesContext from './Context/NotesContext';
import WorkshopsContext from './Context/WorkshopsContext';
import DropdownsContext from './Context/DropdownsContext';
import Router from './Router';
import { Note } from './Types/Notes';
import { WorkshopInterface } from './Types/Workshops';
import { dropdownsEndpoint } from "./Services/requests";
import UseFetchDataEffect from "./Hooks/UseFetchDataEffect";
import { Dropdowns } from "./Types/Dropdowns";
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#203468',
      paper: '#203468',
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
  const [workshops, setWorkshops] = React.useState<WorkshopInterface[]>([]);
  const [dropdowns, setDropdowns] = React.useState<Dropdowns>({});

  UseFetchDataEffect(dropdownsEndpoint, setDropdowns);

  return (
    <ThemeProvider theme={theme}>
      <WorkshopsContext.Provider value={{workshops, setWorkshops}}>
        <NotesContext.Provider value={{notes, setNotes}}>
          <DropdownsContext.Provider value={{dropdowns, setDropdowns}}>
            <BrowserRouter>
              <Router/>
            </BrowserRouter>
          </DropdownsContext.Provider>
        </NotesContext.Provider>
      </WorkshopsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
