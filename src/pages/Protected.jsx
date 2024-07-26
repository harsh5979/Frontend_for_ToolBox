
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/contextapi';

const Privated = ({ element: Component }) => {
    
  const { islogin } = useAuth();

  return islogin ? Component : <Navigate to="/login" />;
};

export default Privated;
