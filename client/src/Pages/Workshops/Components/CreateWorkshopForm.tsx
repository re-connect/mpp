import React, {useContext} from 'react';
import axios from 'axios';
import {topicsEndpoint} from '../../../Services/requests';
import TopicsContext from '../../../Context/TopicsContext';
import {useHistory} from 'react-router-dom';

const CreateWorkshopForm = () => {
  const {topics, setTopics} = useContext(TopicsContext);
  const history = useHistory();
  const token = localStorage.getItem('token');

  if (token !== null) {
    axios
      .get(`${topicsEndpoint}`, {
        headers: {Authorization: `Bearer ${token}`}
      })
      .then((response) => {
        setTopics(response.data['hydra:member']);
      });
  } else {
    history.push('/login');
  }

  return (
    <div>
      <div>Topics list</div>
      <ul>
        {topics.map((topic: any) => (
          <li>{topic.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CreateWorkshopForm;
