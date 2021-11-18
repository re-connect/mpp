import React, {useContext, useEffect} from 'react';
import useFetchCenter from '../../Services/useFetchCenter';
import WorkshopsContext from '../../Context/WorkshopsContext';
import useFetchWorkshops from '../../Services/useFetchWorkshops';
import {useParams} from 'react-router-dom';
import Workshop from './Workshop';

const Workshops = () => {
    const centerId = useParams().centerId;
    const {list} = useContext(WorkshopsContext);
    const {center, fetchCenter} = useFetchCenter();
    const fetchWorkshops = useFetchWorkshops();

    useEffect(() => {
        fetchCenter(centerId)
    }, [fetchCenter, centerId]);

    useEffect(() => {
        fetchWorkshops(centerId);
    }, [fetchWorkshops, centerId]);

    return (
        <div>
            <h1>{center.name}</h1>
            <h2>Nombre d'ateliers : {center.workshops.length}</h2>
            <ul>
                {list.map((workshop: any) => (
                    <Workshop key={workshop.id} workshop={workshop}/>
                ))}
            </ul>
        </div>
    );
};

export default Workshops;
