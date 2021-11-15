import React, {useCallback, useEffect} from 'react';
import {centersEndpoint} from './requests';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function useFetchCenterTest({initialCenter, centerId}: any){
    const [center, setCenter] = React.useState(initialCenter);
    let history = useHistory();

    const fetchCenter = useCallback(() => {
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
        fetchCenter();
    }, [fetchCenter, centerId]);

    return center;
};

export default useFetchCenterTest;
