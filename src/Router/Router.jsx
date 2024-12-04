import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';

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
            }
        ]
    }
])

export default Router;