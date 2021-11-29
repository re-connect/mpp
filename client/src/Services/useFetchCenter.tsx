import React, { useCallback } from 'react';
import { centersEndpoint } from './requests';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialCenter = {
    name: '',
    workshops: [],
    notes: [],
    beneficiaryCount: '',
    createdBeneficiaryCount: '',
    documentsCount: '',
};

function useFetchCenter() {
    const [center, setCenter] = React.useState(initialCenter);
    const history = useHistory();

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
    }, [history]);

    return {center, fetchCenter};
};

export default useFetchCenter;
