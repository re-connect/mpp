import {Container} from '@mui/material';
import React, {useContext} from 'react';
import {useNumber} from 'react-hanger/array';
import {useParams} from 'react-router-dom';
import WorkshopsContext from '../../Context/WorkshopsContext';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import UseQueryParams from '../../Hooks/UseQueryParams';
import {centersEndpoint, workshopsEndpoint} from '../../Services/requests';
import {Center} from '../../Types/Center';
import Card from './Components/Card';
import Page from "../../Components/Page";
import CenterHeader from "../../Components/CenterHeader";
import Pagination from "../../Components/Pagination";

const List = () => {
  const [center, setCenter] = React.useState<Center | null>(null);
  const {centerId} = useParams<{ centerId: string | undefined }>();
  const {workshops, setWorkshops} = useContext(WorkshopsContext);
  const [workshopsCount, workshopsCountActions] = useNumber(0);
  const [currentPage, currentPageActions] = useNumber(parseInt(UseQueryParams().get('page') ?? '1'));

  UseFetchDataEffect((`${centersEndpoint}/${centerId}`), setCenter);
  UseFetchDataEffect((`${workshopsEndpoint}?center=${centerId}&page=${currentPage}`), (data: any) => {
    setWorkshops(data['hydra:member']);
    workshopsCountActions.setValue(data['hydra:totalItems'])
  });

  return (
    <Page>
      <Container maxWidth='sm'>
        <CenterHeader center={center} workshops/>
        {workshops.map((workshop: any) => (
          <Card key={workshop['@id']} workshop={workshop}/>
        ))}
        <Pagination
          currentPage={currentPage}
          totalItems={workshopsCount}
          actions={currentPageActions}
        />
      </Container>
    </Page>
  );
};

export default List;
