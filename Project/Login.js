// src/login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/users');
            const user = response.data.find(user => user.username === username && user.password === password);

            if (user) {
                // Successful login logic (e.g., store token, redirect)
                navigate('/'); // Redirect to home or dashboard
            } else {
                setStatus('Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setStatus('Error logging in. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Login;