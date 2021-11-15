import React, {useCallback, useEffect} from 'react';
import {centersEndpoint} from './requests';
import axios from 'axios';

function useFetchCenterTest({initialCenter, centerId, history}: any){
    const [center, setCenter] = React.useState(initialCenter);

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
