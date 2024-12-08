import React from 'react';
import Banner from './Banner';
import LatestVisas from '../Pages/LatestVisas';
import VisaNewsSection from '../Pages/VisaNewsSection';
import VisaTips from '../Pages/VisaTips';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <LatestVisas></LatestVisas>
            <VisaNewsSection></VisaNewsSection>
            <VisaTips></VisaTips>

        </div>
    );
};

export default Home;