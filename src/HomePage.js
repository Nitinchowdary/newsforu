// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import PoliticsImage from './images/politics.jpg';
import BusinessImage from './images/business.jpg';
import EducationImage from './images/education.jpg';
import HealthImage from './images/health.jpg';
import SportsImage from './images/sports.jpg';
import EntertainmentImage from './images/entertainment.jpg';
import CrimesImage from './images/crimes.jpg';
import WeatherImage from './images/weather.jpg';
import TechnologyImage from './images/technology.jpg';
import SpaceImage from './images/space.jpg';
import CategoryStrip from './CategoryStrip'; // Import the CategoryStrip component

function HomePage() {
    const streams = [
        { id:'politics', title: 'Politics News 1', image: PoliticsImage },
        { id:'Business', title: 'Business News 1', image: BusinessImage },
        { id:'Education', title: 'Education News 1', image: EducationImage },
        { id:'Health', title: 'Health News 1', image: HealthImage },
        { id:'Sports', title: 'Sports News 1', image: SportsImage },
        { id: 'Entertainment', title: 'Entertainment News 1', image: EntertainmentImage },
        { id:'Crimes', title: 'Crimes News 1', image: CrimesImage },
        { id:'Weather', title: 'Weather News 1', image: WeatherImage },
        { id:'Technology', title: 'Technology News 1', image: TechnologyImage },
        { id:'Space and Astronomy', title: 'Space and Astronomy News 1', image: SpaceImage },
    ];

    return (
        <div className="homepage">
            <p className='head'>NEWS FOR U</p>
            <hr/>
            <CategoryStrip />{/* Display the CategoryStrip component */}
            <hr/>
            <h2>Streams</h2>
            <div className="streams-container">
                {streams.map(stream => (
                    <Link to={`/stream/${stream.id}`} key={stream.id} className="stream-item">
                        <img src={stream.image} alt={stream.title} />
                        <div className="stream-content">
                            <h3>{stream.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomePage;