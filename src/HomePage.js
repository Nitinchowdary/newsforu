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

function HomePage() {
    const streams = [
        { id: 1, type: 'politics', title: 'Politics News 1', image: PoliticsImage },
        { id: 2, type: 'Business', title: 'Business News 1', image: BusinessImage },
        { id: 3, type: 'Education', title: 'Education News 1', image: EducationImage },
        { id: 4, type: 'Health', title: 'Health News 1', image: HealthImage },
        { id: 5, type: 'Sports', title: 'Sports News 1', image: SportsImage },
        { id: 6, type: 'Entertainment', title: 'Entertainment News 1', image: EntertainmentImage },
        { id: 7, type: 'Crimes', title: 'Crimes News 1', image: CrimesImage },
        { id: 8, type: 'Weather', title: 'Weather News 1', image: WeatherImage },
        { id: 9, type: 'Technology', title: 'Technology News 1', image: TechnologyImage },
        { id: 10, type: 'Space and Astronomy', title: 'Space and Astronomy News 1', image: SpaceImage },
    ];

    return (
        <div className="homepage">
            <h2>Streams</h2>
            <div className="streams-container">
                {streams.map(stream => (
                     <Link to={`/stream/${stream.type}`} key={stream.type} className="stream-item">
                     <img src={stream.image} alt={stream.title} />
                     <div className="stream-content">
                         <h3>{stream.title}</h3>
                         {/* Remove other content */}
                     </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
