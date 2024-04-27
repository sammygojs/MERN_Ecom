import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../auth'; // Ensure this path matches where your auth functions are defined

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const authStatus = isAuthenticated();

    // Check if user is authenticated
    if (!authStatus) {
        // Redirect to login page if not authenticated
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Render children if authenticated
    return children;
};

export default ProtectedRoute;