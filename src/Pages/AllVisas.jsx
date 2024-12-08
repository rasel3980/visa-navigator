import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const AllVisas = () => {
    const visas = useLoaderData();
    
    return (
        <div className='w-11/12 mx-auto my-12'>
            <div className='grid grid-cols-4 gap-8'>
            {
                visas.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
            }
        </div>
        </div>
    );
};

export default AllVisas;