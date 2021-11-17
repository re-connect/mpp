import React, {useContext, useEffect} from 'react';
import useFetchCenter from '../../Services/useFetchCenter';
import WorkshopsContext from '../../Context/WorkshopsContext';
import useFetchWorkshops from '../../Services/useFetchWorkshops';
import {useParams} from 'react-router-dom';

const Workshops = () => {
    const centerId = useParams().centerId;
    const {list} = useContext(WorkshopsContext);
    const {center, fetchCenter} = useFetchCenter();
    useFetchWorkshops();

    useEffect(() => {
        fetchCenter(centerId)
    }, [fetchCenter, centerId]);

    return (
        <div>
            <h1>{center.name}</h1>
            <h2>Nombre d'ateliers : {center.workshops.length}</h2>
            <ul>
                {list.map((workshop: any) => (
                    <li key={workshop.id}>Atelier n° {workshop.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default Workshops;
