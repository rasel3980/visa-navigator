import React from 'react';
import Banner from './Banner';
import LatestVisas from '../Pages/LatestVisas';
import VisaNewsSection from '../Pages/VisaNewsSection';
import TopCountriesSection from '../Pages/TopCountriesSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestVisas></LatestVisas>
            <TopCountriesSection></TopCountriesSection>
            <VisaNewsSection></VisaNewsSection>

        </div>
    );
};

export default Home;