// Signin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission, e.g., authentication
  };

  return (
    <div className="signin-container">
      <h2>Signin</h2>
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


