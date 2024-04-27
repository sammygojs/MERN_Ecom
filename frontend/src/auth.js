import axios from 'axios';

// Save token to localStorage
export const setToken = (token) => {
    localStorage.setItem('token', token);
};

// Get the token from localStorage
export const getToken = () => {
    return localStorage.getItem('token');
};

// Remove token from localStorage
export const removeToken = () => {
    localStorage.removeItem('token');
};

// Check if the user is authenticated
export const isAuthenticated = () => {
    const token = getToken();
    return !!token;  // Convert token presence to a boolean
};

// Optionally validate token against the server
export const validateToken = async () => {
    const token = getToken();
    if (!token) {
        return false;
    }
    
    try {
        const response = await axios.get('/api/validateToken', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data.isValid; // The response must include a boolean `isValid` field
    } catch (error) {
        console.error('Error validating token', error);
        return false;
    }
};

// Example of how to make an authenticated API request
export const fetchProtectedData = async () => {
    const token = getToken();
    if (!token) {
        console.error("No token available.");
        return null;
    }

    try {
        const response = await axios.get('/api/protected/data', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;  // Return the data from the server
    } catch (error) {
        console.error('Error fetching protected data', error);
        return null;
    }
};

export default {fetchProtectedData, isAuthenticated, setToken};