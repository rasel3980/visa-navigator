import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useContext(authContext);

  if (auth?.loading) {
    return <Loading />;
  }

  if (auth?.user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoute;