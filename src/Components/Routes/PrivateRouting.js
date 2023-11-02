import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ userType }) => {
  const token = localStorage.getItem('token');
  // const loginType = localStorage.getItem('userType');

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/user/login" />;
  }
};

export default PrivateRoute;
