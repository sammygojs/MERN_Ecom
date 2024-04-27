import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { isAuthenticated, fetchProtectedData } from '../auth';

function ProtectedComponent() {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');
        // Redirect to the login page
        navigate('/login');
    };
    // useEffect(() => {
    //     if (!isAuthenticated()) {
    //         navigate('/login');
    //     } else {
    //         fetchProtectedData().then(data => {
    //             console.log('Protected data:', data);
    //         }).catch(error => {
    //             console.error('Failed to fetch data', error);
    //         });
    //     }
    // }, [navigate]);

    return (
        <div>
            <h1>Protected Component</h1>
            <p>This is a protected component. If you see this, you are authenticated.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default ProtectedComponent;
