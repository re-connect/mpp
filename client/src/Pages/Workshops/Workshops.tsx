import React from 'react';
import useFetchCenter from '../../Services/useFetchCenter';

const initialCenter = {
    name: '',
    workshops: [],
};

const Workshops = () => {
    const center = useFetchCenter(initialCenter);

    return (
        <h1>{center.name}</h1>
    );
};

export default Workshops;
