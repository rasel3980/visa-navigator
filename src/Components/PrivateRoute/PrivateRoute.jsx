import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    if (loading) {
        return <Loading></Loading>
      }
      if (user) {
        return children;
      }
    
      return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;