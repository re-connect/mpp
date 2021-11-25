import {ThemeProvider} from '@material-ui/styles';
import {createTheme} from '@material-ui/core/styles';
import * as React from 'react';
import NotesContext from './Context/NotesContext';
import Routes from './Routes';
import {Note} from './Types/Notes';
import {Workshop} from './Types/Workshops';
import WorkshopsContext from './Context/WorkshopsContext';
import {Topic} from './Types/Topics';
import TopicsContext from './Context/TopicsContext';
import {ParticipantKind} from './Types/ParticipantKinds';
import ParticipantKindsContext from './Context/ParticipantKindsContext';
import {EquipmentSupplier} from './Types/EquipmentSuppliers';
import EquipmentSuppliersContext from './Context/EquipmentSuppliersContext';
import {AgeBreakpoint} from './Types/AgeBreakpoints';
import AgeBreakpointsContext from './Context/AgeBreakpointsContext';
import {UsedEquipment} from './Types/UsedEquipments';
import UsedEquipmentsContext from './Context/UsedEquipmentsContext';

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
  const [topics, setTopics] = React.useState<Topic[]>([]);
  const [participantKinds, setParticipantKinds] = React.useState<ParticipantKind[]>([]);
  const [equipmentSuppliers, setEquipmentSuppliers] = React.useState<EquipmentSupplier[]>([]);
  const [ageBreakpoints, setAgeBreakpoints] = React.useState<AgeBreakpoint[]>([]);
  const [usedEquipments, setUsedEquipments] = React.useState<UsedEquipment[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <WorkshopsContext.Provider value={{workshops, setWorkshops}}>
        <NotesContext.Provider value={{notes, setNotes}}>
          <TopicsContext.Provider value={{topics, setTopics}}>
            <ParticipantKindsContext.Provider value={{participantKinds, setParticipantKinds}}>
              <EquipmentSuppliersContext.Provider value={{equipmentSuppliers, setEquipmentSuppliers}}>
                <AgeBreakpointsContext.Provider value={{ageBreakpoints, setAgeBreakpoints}}>
                  <UsedEquipmentsContext.Provider value={{usedEquipments, setUsedEquipments}}>
                    <Routes/>
                  </UsedEquipmentsContext.Provider>
                </AgeBreakpointsContext.Provider>
              </EquipmentSuppliersContext.Provider>
            </ParticipantKindsContext.Provider>
          </TopicsContext.Provider>
        </NotesContext.Provider>
      </WorkshopsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
