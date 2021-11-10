import React, {useCallback, useEffect} from "react";
import superagent, {Response} from "superagent";
import {centersEndpoint} from "./requests";

function useFetchCenterTest({initialCenter, centerId, history}: any){
    const [center, setCenter] = React.useState(initialCenter);

    const fetchCenter = useCallback(() => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            superagent
                .get(`${centersEndpoint}/${centerId}`)
                .set('Authorization', `Bearer ${token}`)
                .then((response: Response) => {
                    setCenter(response.body);
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
