import React from 'react';
import useFetchCenter from '../../Services/useFetchCenter';

const Workshops = () => {
    const center = useFetchCenter();

    return (
        <h1>{center.name}</h1>
    );
};

export default Workshops;
