import { useCallback, useContext } from 'react';
import { workshopsEndpoint } from './requests';
import { useHistory } from 'react-router-dom';
import WorkshopsContext from '../Context/WorkshopsContext';
import axios from 'axios';

function useFetchWorkshops() {
    const {setWorkshops} = useContext(WorkshopsContext);
    const history = useHistory();

    const fetchWorkshops = useCallback((centerId: number, workshopsCountAction: any, page: any) => {
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
                    history.push(`/workshops/${centerId}?page=${null === page ? '1' : page}`)
                });
        } else {
            history.push('/login');
        }
    }, [history]);

    return fetchWorkshops;
}

export default useFetchWorkshops;
