import React from 'react';
import Text from "./Text";
import Title from "./Title";
import AddIcon from "@mui/icons-material/Add";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "./Link";

interface Props {
  center: any;
}

const CenterHeader: React.FC<Props> = ({center}) => {
  if (!center) return null;

  return (
    <Grid2 mb={2}>
      <Grid2>
        <Title text={!center.name ? '' : center.name}/>
      </Grid2>
      <Grid2 container columns={2}>
        <Grid2>
          <Text text={`Nb permanences: ${!center.notes ? '' : center.notes.length}`}/>
          <Text text={`Nb bénef rencontrés: ${!center.beneficiariesCount ? '' : center.beneficiariesCount}`}/>
          <Text text={`Nb CFN crées: ${!center.notesBeneficiariesCount ? '' : center.notesBeneficiariesCount}`}/>
          <Text
            text={`Nb docs stockés: ${!center.notesStoredDocumentsCount ? '' : center.notesStoredDocumentsCount}`}/>
        </Grid2>
        <Grid2 flexGrow={1}/>
        <Grid2>
          <Link
            href={`/centers/${center.id}/create-permanence`}
            text="Ajouter une permanence"
            Icon={AddIcon}
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

export default CenterHeader;
