import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-50 backdrop-blur-lg bg-white/30 shadow-lg '>
            <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;