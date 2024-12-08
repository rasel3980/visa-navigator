import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const AllVisas = () => {
    const visas = useLoaderData();
    
    return (
        <div className='grid grid-cols-4 gap-3'>
            {
                visas.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
            }
        </div>
    );
};

export default AllVisas;