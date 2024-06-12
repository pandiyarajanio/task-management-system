import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isLoggedIn, isAdmin, adminOnly, ...rest }) => {
  if (!isLoggedIn) {
    return <Navigate to="/employee-login" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={Component} />;
};

export default ProtectedRoute;
