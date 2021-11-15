import React, {useCallback, useEffect} from 'react';
import {centersEndpoint} from './requests';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

function useFetchCenterTest(initialCenter: any){
    const [center, setCenter] = React.useState(initialCenter);
    const history = useHistory();
    const centerId = useParams().centerId;

    const fetchCenter = useCallback((centerId) => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            axios
                .get(`${centersEndpoint}/${centerId}`, {
                    headers : {Authorization: `Bearer ${token}`}
                })
                .then((response) => {
                    setCenter(response.data);
                });
        } else {
            history.push('/login');
        }
    }, [history, centerId]);

    useEffect(() => {
        fetchCenter(centerId);
    }, [fetchCenter, centerId]);

    return center;
};

export default useFetchCenterTest;
