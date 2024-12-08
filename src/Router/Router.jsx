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
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import Allinfo from '../Pages/Allinfo';


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
                loader: ()=>fetch('https://visa-navigator-crud.vercel.app/visa')
                
            },
            {
                path:"/add visa",
                element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>
            },
            {
                path:"/update-visa/:id",
                element:<Update></Update>,
                loader: ({params})=>fetch(`https://visa-navigator-crud.vercel.app/vis/${params.id}`),
            },
            {
                path:"/my add visas",
                element:<PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
                // loader: ()=>fetch(`https://visa-navigator-crud.vercel.app/${}`)
            },
            {
                path:"/my-visa-application",
                element:<PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>,
                // loader: ()=> fetch('https://visa-navigator-crud.vercel.app/my-application'),
            },
            {
                path:"/all-info",
                element:<Allinfo></Allinfo>
            },
            {
                path:"/visa-details/:id",
                element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
                loader: ({params})=>fetch(`https://visa-navigator-crud.vercel.app/vis/${params.id}`),
            }
        ]
    }
])

export default Router;