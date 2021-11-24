import {ParticipantKind} from '../Types/ParticipantKinds';
import {createContext} from 'react';

interface ParticipantKindsContext {
  participantKinds: ParticipantKind[];
  setParticipantKinds: (participantKind: ParticipantKind[]) => void;
}

const defaultValues = {
  participantKinds: [],
  setParticipantKinds: () => {},
};

const ParticipantKindsContext = createContext<ParticipantKindsContext>(defaultValues);

export default ParticipantKindsContext;
