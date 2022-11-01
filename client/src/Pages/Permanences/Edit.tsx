import Container from '@mui/material/Container';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import UseFetchDataEffect from '../../Hooks/UseFetchDataEffect';
import {buildEntityEndpoint, permanencesEndpoint} from '../../Services/requests';
import UseFetchData from '../../Hooks/UseFetchData';
import Form from './Components/Form';

const Edit = () => {
  const {permanenceId} = useParams() as { permanenceId: string };
  const [permanence, setPermanence] = useState<any>(null);
  const entityUrl = !permanence ? '' : buildEntityEndpoint(permanence);

  UseFetchDataEffect(`${permanencesEndpoint}/${parseInt(permanenceId)}`, setPermanence);

  const updatePermanence = UseFetchData(entityUrl, () => {
  }, 'PUT');

  if (!permanence) return null;

  return (
    <Container maxWidth='sm'>
      <Form permanence={permanence} onSubmit={updatePermanence}/>
    </Container>
  )
}

export default Edit;
