import React, {useContext} from 'react';
import useFetchCenter from '../../Services/useFetchCenter';
import WorkshopsContext from '../../Context/WorkshopsContext';
import useFetchActivities from '../../Services/useFetchActivities';

const Workshops = () => {
    const center = useFetchCenter();
    const workshopsContext = useContext(WorkshopsContext);
    useFetchActivities();

    return (
        <div>
            <h1>{center.name}</h1>
            <h2>Nombre d'ateliers : {center.workshops.length}</h2>
            <ol>
                {workshopsContext.list.map((workshop: any) => (
                    <li key={workshop.id}>Atelier n° {workshop.id}</li>
                ))}
            </ol>
        </div>
    );
};

export default Workshops;
