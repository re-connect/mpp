import React, {useCallback, useEffect} from "react";
import superagent, {Response} from "superagent";
import {centersEndpoint} from "../../Services/requests";

const initialCenter = {
    name: '',
    workshops: [],
};

const Workshops = ({history, match}: any) => {
    const {centerId} = match.params;
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

    return (
        <h1>{center.name}</h1>
    );
};

export default Workshops;
