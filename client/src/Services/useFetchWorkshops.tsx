import {useCallback, useContext, useEffect} from 'react';
import {workshopsEndpoint} from './requests';
import {useHistory, useParams} from 'react-router-dom';
import WorkshopsContext from '../Context/WorkshopsContext';
import axios from 'axios';

function useFetchWorkshops() {
    const {setWorkshops} = useContext(WorkshopsContext);
    const history = useHistory();
    const centerId = useParams().centerId;

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
    }, [centerId, history]);

    useEffect(() => {
        fetchWorkshops(centerId);
    }, [fetchWorkshops, centerId]);
}

export default useFetchWorkshops;
