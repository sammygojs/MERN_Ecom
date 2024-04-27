import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../auth'; // Import the setToken function from your auth.js module'
import { isAuthenticated } from '../auth';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/home');
        } 
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Perform the API call to your backend to authenticate the user
            const response = await axios.post('http://localhost:5000/api/users/login', {
                username,
                password
            });
            // If login is successful, save the token and redirect to the home page
            setToken(response.data.token);
            navigate('/home');
        } catch (error) {
            if (error.response) {
                // If the server responds with a non-200 status, handle the error
                alert(`Login failed: ${error.response.data.message}`);
            } else {
                // If there is no response (server down, no connectivity), handle the error
                alert('Login failed: Server is unreachable.');
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
