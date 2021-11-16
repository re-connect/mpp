import {useCallback, useContext, useEffect} from 'react';
import {notesEndpoint, workshopsEndpoint} from './requests';
import {useHistory, useParams} from 'react-router-dom';
import NotesContext from '../Context/NotesContext';
import WorkshopsContext from '../Context/WorkshopsContext';
import axios from 'axios';

function useFetchActivities() {
    const notesContext = useContext(NotesContext);
    const workshopsContext = useContext(WorkshopsContext);
    const centerId = useParams().centerId;
    const history = useHistory();
    const pathName = history.location.pathname;
    const endpoint = pathName.includes('workshops') ? workshopsEndpoint : notesEndpoint;
    const activitiesContext = pathName.includes('workshops') ? workshopsContext : notesContext;

    const fetchActivities = useCallback((centerId) => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            axios
                .get(`${endpoint}?center=${centerId}`, {
                    headers: {Authorization: `Bearer ${token}`}
                })
                .then((response) => {
                    activitiesContext.set(response.data['hydra:member']);
                });
        } else {
            history.push('/login');
        }
    }, [centerId, history]);

    useEffect(() => {
        fetchActivities(centerId);
    }, [fetchActivities, centerId]);
}

export default useFetchActivities;
