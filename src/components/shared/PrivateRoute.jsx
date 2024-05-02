import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Se usa para obtener el estado de Redux

const PrivateRoute = ({ element }) => {
  
  const isAuthenticated = useSelector((state) => state.auth.isLogged);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
