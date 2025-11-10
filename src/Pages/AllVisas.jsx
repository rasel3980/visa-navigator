import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const AllVisas = () => {
    const visas = useLoaderData();
    
    return (
        <div className='px-12 bg-gray-200 py-12'>
            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-4'>
            {
                visas.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
            }
        </div>
        </div>
    );
};

export default AllVisas;