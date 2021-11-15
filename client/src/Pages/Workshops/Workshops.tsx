import React from 'react';
import useFetchCenter from '../../Services/useFetchCenter';

const Workshops = () => {
    const center = useFetchCenter();

    return (
        <div>
            <h1>{center.name}</h1>
            <h2>Nombre d'ateliers : {center.workshops.length}</h2>
        </div>
    );
};

export default Workshops;
