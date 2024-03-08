// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Signup from './Signup';
import Signin from './Signin';
import StreamDetail from './StreamDetail';

function App() {
    return (
        <Router>
            <div className="App">
            <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/stream/:id" element={<StreamDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
