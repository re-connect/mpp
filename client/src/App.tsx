import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import AgeBreakpointsContext from './Context/AgeBreakpointsContext';
import EquipmentSuppliersContext from './Context/EquipmentSuppliersContext';
import NotesContext from './Context/NotesContext';
import ParticipantKindsContext from './Context/ParticipantKindsContext';
import TopicsContext from './Context/TopicsContext';
import UsedEquipmentsContext from './Context/UsedEquipmentsContext';
import WorkshopsContext from './Context/WorkshopsContext';
import SkillsContext from './Context/SkillsContext';
import DropdownsContext from './Context/DropdownsContext';
import Routes from './Routes';
import { AgeBreakpoint } from './Types/AgeBreakpoints';
import { EquipmentSupplier } from './Types/EquipmentSuppliers';
import { Note } from './Types/Notes';
import { ParticipantKind } from './Types/ParticipantKinds';
import { Topic } from './Types/Topics';
import { UsedEquipment } from './Types/UsedEquipments';
import { WorkshopInterface } from './Types/Workshops';
import { Skill } from "./Types/Skills";
import {
  ageBreakpointsEndpoint,
  dropdownsEndpoint,
  equipmentSuppliersEndpoint,
  participantKindsEndpoint,
  skillsEndpoint,
  topicsEndpoint,
  usedEquipmentsEndpoint
} from "./Services/requests";
import UseFetchDataEffect from "./Hooks/UseFetchDataEffect";
import { Dropdowns } from "./Types/Dropdowns";

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
  const [topics, setTopics] = React.useState<Topic[]>([]);
  const [participantKinds, setParticipantKinds] = React.useState<ParticipantKind[]>([]);
  const [equipmentSuppliers, setEquipmentSuppliers] = React.useState<EquipmentSupplier[]>([]);
  const [ageBreakpoints, setAgeBreakpoints] = React.useState<AgeBreakpoint[]>([]);
  const [usedEquipments, setUsedEquipments] = React.useState<UsedEquipment[]>([]);
  const [skills, setSkills] = React.useState<Skill[]>([]);
  const [dropdowns, setDropdowns] = React.useState<Dropdowns>({});

  UseFetchDataEffect(participantKindsEndpoint, (data: any) => setParticipantKinds(data['hydra:member']));
  UseFetchDataEffect(equipmentSuppliersEndpoint, (data: any) => setEquipmentSuppliers(data['hydra:member']));
  UseFetchDataEffect(ageBreakpointsEndpoint, (data: any) => setAgeBreakpoints(data['hydra:member']));
  UseFetchDataEffect(usedEquipmentsEndpoint, (data: any) => setUsedEquipments(data['hydra:member']));
  UseFetchDataEffect(topicsEndpoint, (data: any) => setTopics(data['hydra:member']));
  UseFetchDataEffect(skillsEndpoint, (data: any) => setSkills(data['hydra:member']));
  UseFetchDataEffect(dropdownsEndpoint, setDropdowns);

  return (
    <ThemeProvider theme={theme}>
      <WorkshopsContext.Provider value={{workshops, setWorkshops}}>
        <NotesContext.Provider value={{notes, setNotes}}>
          <TopicsContext.Provider value={{topics, setTopics}}>
            <ParticipantKindsContext.Provider value={{participantKinds, setParticipantKinds}}>
              <EquipmentSuppliersContext.Provider value={{equipmentSuppliers, setEquipmentSuppliers}}>
                <AgeBreakpointsContext.Provider value={{ageBreakpoints, setAgeBreakpoints}}>
                  <UsedEquipmentsContext.Provider value={{usedEquipments, setUsedEquipments}}>
                    <SkillsContext.Provider value={{skills, setSkills}}>
                      <DropdownsContext.Provider value={{dropdowns, setDropdowns}}>
                        <Routes/>
                      </DropdownsContext.Provider>
                    </SkillsContext.Provider>
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
