import React from 'react';
import {Divider} from "@mui/material";
import Text from "./Text";
import Title from "./Title";

interface Props {
  center: any;
}

const CenterHeader: React.FC<Props> = ({center}) => (
  <>
    {!center ? null : (
      <>
        <Title text={!center.name ? '' : center.name}/>
        <Text text={`Nb permanences: ${!center.notes ? '' : center.notes.length}`}/>
        <Text text={`Nb bénef rencontrés: ${!center.beneficiariesCount ? '' : center.beneficiariesCount}`}/>
        <Text text={`Nb CFN crées: ${!center.notesBeneficiariesCount ? '' : center.notesBeneficiariesCount}`}/>
        <Text
          text={`Nb docs stockés: ${!center.notesStoredDocumentsCount ? '' : center.notesStoredDocumentsCount}`}/>
      </>
    )}
    <br/>
    <Divider/>
  </>
);

export default CenterHeader;
