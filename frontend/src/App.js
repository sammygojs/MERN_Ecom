import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ProtectedComponent from './components/ProtectedComponent';
import ProtectedRoute from './components/ProtectedRoute'; // Make sure this import points to the correct file

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path="/protected" element={
                    <ProtectedRoute>
                        <ProtectedComponent />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
