import {createTheme, ThemeProvider} from '@mui/material/styles';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';
import PermanencesContext from './Context/PermanencesContext';
import WorkshopsContext from './Context/WorkshopsContext';
import DropdownsContext from './Context/DropdownsContext';
import Router from './Router';
import {WorkshopInterface} from './Types/Workshops';
import {dropdownsEndpoint} from "./Services/requests";
import UseFetchDataEffect from "./Hooks/UseFetchDataEffect";
import {Dropdowns} from "./Types/Dropdowns";
import {BrowserRouter} from "react-router-dom";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {Permanence} from "./Types/Permanence";

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8af29',
    },
    secondary: {
      main: '#0E6F73',
    },
  },
});

const App = () => {
  const [permanences, setPermanences] = React.useState<Permanence[]>([]);
  const [workshops, setWorkshops] = React.useState<WorkshopInterface[]>([]);
  const [dropdowns, setDropdowns] = React.useState<Dropdowns>({});

  UseFetchDataEffect(dropdownsEndpoint, setDropdowns);

  return (
    <ThemeProvider theme={theme}>
      <WorkshopsContext.Provider value={{workshops, setWorkshops}}>
        <PermanencesContext.Provider value={{permanences, setPermanences}}>
          <DropdownsContext.Provider value={{dropdowns, setDropdowns}}>
            <BrowserRouter>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Router/>
              </LocalizationProvider>
            </BrowserRouter>
          </DropdownsContext.Provider>
        </PermanencesContext.Provider>
      </WorkshopsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
