import {Container} from '@mui/material';
import React, {useContext} from 'react';
import {useNumber} from 'react-hanger/array';
import PermanencesContext from '../../Context/PermanencesContext';
import {centersEndpoint, permanencesEndpoint} from '../../Services/requests';
import Card from './Components/Card';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import UseFetchData from '../../Hooks/UseFetchData';
import {Center} from '../../Types/Center';
import {useParams} from 'react-router-dom';
import CenterHeader from "../../Components/CenterHeader";
import Stack from "@mui/material/Stack";
import Page from "../../Components/Page";
import Pagination from "../../Components/Pagination";


const List = () => {
  const [permanencesCount, permanencesCountActions] = useNumber(0);
  const [currentPage, currentPageActions] = useNumber(1);
  const {centerId} = useParams<{ centerId: string | undefined }>();
  const {permanences, setPermanences} = useContext(PermanencesContext);
  const [center, setCenter] = React.useState<Center>({});

  UseFetchDataEffect(`${centersEndpoint}/${centerId}`, setCenter);
  const fetchPermanences = UseFetchData(`${permanencesEndpoint}?center=${centerId}&page=${currentPage}`, (data: any) => {
    permanencesCountActions.setValue(data['hydra:totalItems'])
    setPermanences(data['hydra:member']);
  });

  React.useEffect(() => {
    fetchPermanences();
  }, [fetchPermanences])

  return (
    <Page>
      <Container maxWidth='sm'>
        <Stack>
          <CenterHeader center={center} permanences/>
          {permanences.map((note: any) => <Card note={note} key={note.id}/>)}
          <Pagination
            currentPage={currentPage}
            totalItems={permanencesCount}
            actions={currentPageActions}
          />
        </Stack>
      </Container>
    </Page>
  );
};

export default List;
