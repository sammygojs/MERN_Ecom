import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page. This page is protected and only accessible if you are logged in.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
