// Navbar.js
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // Import Link
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Hide the navbar on the Signin page
    if (location.pathname === '/signin' || location.pathname === '/signup') {
        return null;
    }

    return (
        <div>
            <nav className="navbar">
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="logo">
                    {/* Use Link instead of a tag */}
                    <Link to="/"><img style={{ height: '50%', width: '75%' }} src={logo} alt="Logo" /></Link>
                </div>
                <div className={`nav-links ${showMenu ? 'active' : ''}`}>
                    <ul>
                        <li><a href="aboutus.html">About us</a></li>
                        <li><a href="termsofuse.html">Terms of use</a></li>
                        <li><a href="privacypolicy.html">Privacy policy</a></li>
                        <li><a href="contactus.html">Contact us</a></li>
                    </ul>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <div className="auth-buttons">
                    <button onClick={() => navigate('/signin')}>Sign In/Sign Up</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

