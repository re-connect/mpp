import { useCallback, useContext } from 'react';
import { workshopsEndpoint } from './requests';
import { useHistory } from 'react-router-dom';
import WorkshopsContext from '../Context/WorkshopsContext';
import axios from 'axios';

function useFetchWorkshops() {
    const {setWorkshops} = useContext(WorkshopsContext);
    const history = useHistory();

    const fetchWorkshops = useCallback((centerId) => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            axios
                .get(`${workshopsEndpoint}?center=${centerId}`, {
                    headers: {Authorization: `Bearer ${token}`}
                })
                .then((response) => {
                    setWorkshops(response.data['hydra:member']);
                });
        } else {
            history.push('/login');
        }
    }, [history]);

    return fetchWorkshops;
}

export default useFetchWorkshops;
