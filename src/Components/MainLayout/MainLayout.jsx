import React from 'react';
import Home from '../Home';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;