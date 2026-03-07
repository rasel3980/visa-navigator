
import { createBrowserRouter, LoaderFunctionArgs } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import AllVisas from '../Pages/AllVisas';
import AddVisa from '../Pages/AddVisa';
import MyAddedVisas from '../Pages/MyAddedVisas';
import MyVisaApplications from '../Pages/MyVisaApplications';
import VisaDetails from '../Pages/VisaDetails';
import Update from '../Pages/Update';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all visas",
        element: <AllVisas />,
        loader: (): Promise<Response> =>
          fetch('https://visa-navigator-crud.vercel.app/visa'),
      },
      {
        path: "/add visa",
        element: <PrivateRoute><AddVisa /></PrivateRoute>,
      },
      {
        path: "/update-visa/:id",
        element: <Update />,
        loader: ({ params }: LoaderFunctionArgs): Promise<Response> =>
          fetch(`https://visa-navigator-crud.vercel.app/vis/${params.id}`),
      },
      {
        path: "/my add visas",
        element: <PrivateRoute><MyAddedVisas /></PrivateRoute>,
      },
      {
        path: "/my-visa-application",
        element: <PrivateRoute><MyVisaApplications /></PrivateRoute>,
      },
      {
        path: "/visa-details/:id",
        element: <PrivateRoute><VisaDetails /></PrivateRoute>,
        loader: ({ params }: LoaderFunctionArgs): Promise<Response> =>
          fetch(`https://visa-navigator-crud.vercel.app/vis/${params.id}`),
      },
    ],
  },
]);

export default Router;