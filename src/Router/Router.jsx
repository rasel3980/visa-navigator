import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import AllVisas from '../Pages/AllVisas';
import AddVisa from '../Pages/AddVisa';
import MyAddedVisas from '../Pages/MyAddedVisas';
import MyVisaApplications from '../Pages/MyVisaApplications';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/All visas",
                element:<AllVisas></AllVisas>
            },
            {
                path:"/add visa",
                element:<AddVisa></AddVisa>
            },
            {
                path:"/my add visas",
                element:<MyAddedVisas></MyAddedVisas>
            },
            {
                path:"/my visa application",
                element:<MyVisaApplications></MyVisaApplications>
            }
        ]
    }
])

export default Router;