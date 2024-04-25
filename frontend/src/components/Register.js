import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Using useNavigate for navigation

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // API request to the server to register the user
            await axios.post('http://localhost:5000/api/users/register', { username, password });
            alert('Registration successful');
            navigate('/login');  // Navigate to login page after successful registration
        } catch (error) {
            // Error handling, assuming the server responds with error in the message body
            if (error.response) {
                alert(`Registration failed: ${error.response.data}`);
            } else {
                alert('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
