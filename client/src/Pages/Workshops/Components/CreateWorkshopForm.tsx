import React, {useContext} from 'react';
import axios from 'axios';
import {topicsEndpoint} from '../../../Services/requests';
import TopicsContext from '../../../Context/TopicsContext';
import {useHistory} from 'react-router-dom';

const CreateWorkshopForm = () => {
    const topicsContext = useContext(TopicsContext);
    const history = useHistory();

    if (topicsContext.listTopics.length === 0) {
        const token = localStorage.getItem('token');
        if (token !== null) {
            axios
                .get(`${topicsEndpoint}`, {
                    headers: {Authorization: `Bearer ${token}`}
                })
                .then((response) => {
                    topicsContext.setTopics(response.data['hydra:member']);
                });
        } else {
            history.push('/login');
        }
    }

    return (
        <div>
            <div>Topics list</div>
            <ul>
                {topicsContext.listTopics.map((topic: any) => (
                    <li>{topic.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CreateWorkshopForm;
