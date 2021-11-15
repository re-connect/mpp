import React from 'react';
import useFetchCenter from '../../Services/useFetchCenter';

const initialCenter = {
    name: '',
    workshops: [],
};

const Workshops = ({match}: any) => {
    const {centerId} = match.params;
    const center = useFetchCenter({initialCenter, centerId});

    return (
        <h1>{center.name}</h1>
    );
};

export default Workshops;
