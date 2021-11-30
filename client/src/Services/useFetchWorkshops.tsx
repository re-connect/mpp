import { useCallback, useContext } from 'react';
import { workshopsEndpoint } from './requests';
import { useHistory } from 'react-router-dom';
import WorkshopsContext from '../Context/WorkshopsContext';
import axios from 'axios';

function useFetchWorkshops() {
    const {setWorkshops} = useContext(WorkshopsContext);
    const history = useHistory();

    const fetchWorkshops = useCallback((centerId, workshopsCountAction, page = 1) => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            axios
                .get(workshopsEndpoint, {
                    headers: {Authorization: `Bearer ${token}`},
                    params: {
                        center: centerId,
                        page: page
                    }
                })
                .then((response) => {
                    setWorkshops(response.data['hydra:member']);
                    workshopsCountAction.setValue(response.data['hydra:totalItems'])
                });
        } else {
            history.push('/login');
        }
    }, [history]);

    return fetchWorkshops;
}

export default useFetchWorkshops;
