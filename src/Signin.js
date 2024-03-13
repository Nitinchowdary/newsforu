// Signin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';

function Signin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();  // Use useNavigate hook for programmatic navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3002/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (responseData.success) {
                // Redirect to homepage on successful sign-in
                console.log(responseData.message);
                navigate('/');  // Use navigate instead of history.push
            } else {
                setErrorMessage(responseData.message);
            }
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <div className="signin-container">
            <h2>Signin</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Signin</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Signup here</Link>
            </p>
        </div>
    );
}

export default Signin;
