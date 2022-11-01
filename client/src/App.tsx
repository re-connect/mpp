import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
import { BrowserRouter } from "react-router-dom";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import purple from '@mui/material/colors/purple';

const theme = createTheme({
  palette: {
    primary: purple,
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Router/>
              </LocalizationProvider>
            </BrowserRouter>
          </DropdownsContext.Provider>
        </NotesContext.Provider>
      </WorkshopsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
