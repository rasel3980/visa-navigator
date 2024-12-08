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
import VisaDetails from '../Pages/VisaDetails';
import UserApply from '../Pages/UserApply';
import Update from '../Pages/Update';


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
                path:"/all visas",
                element:<AllVisas></AllVisas>,
                loader: ()=>fetch('http://localhost:5000/visa')
                
            },
            {
                path:"/add visa",
                element:<AddVisa></AddVisa>
            },
            {
                path:"/update-visa/:id",
                element:<Update></Update>,
                loader: ({params})=>fetch(`http://localhost:5000/vis/${params.id}`),
            },
            {
                path:"/my add visas",
                element:<MyAddedVisas></MyAddedVisas>,
                // loader: ()=>fetch(`http://localhost:5000/${}`)
            },
            {
                path:"/my visa application",
                element:<MyVisaApplications></MyVisaApplications>
            },
            {
                path:"/user apply",
                element:<UserApply></UserApply>
            },
            {
                path:"/visa-details/:id",
                element:<VisaDetails></VisaDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/vis/${params.id}`),
            }
        ]
    }
])

export default Router;