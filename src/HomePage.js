import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
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
    // Sample content for the streams
    const streams = [
        { id: 1, type: 'Politics', title: 'Politics News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: PoliticsImage },
        { id: 2, type: 'Business', title: 'Business News 1', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: BusinessImage },
        { id: 3, type: 'Education', title: 'Education News 1', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: EducationImage },
        { id: 4, type: 'Health', title: 'Health News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: HealthImage },
        { id: 5, type: 'Sports', title: 'Sports News 1', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: SportsImage },
        { id: 6, type: 'Entertainment', title: 'Entertainment News 1', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: EntertainmentImage },
        { id: 7, type: 'Crimes', title: 'Crimes News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: CrimesImage },
        { id: 8, type: 'Weather', title: 'Weather News 1', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: WeatherImage },
        { id: 9, type: 'Technology', title: 'Technology News 1', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: TechnologyImage },
        { id: 10, type: 'Space and Astronomy', title: 'Space and Astronomy News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: SpaceImage },
        // Add more streams here
    ];

    return (
        <div className="homepage">
            <h2>Streams</h2>
            <div className="streams-container">
                {streams.map(stream => (
                    <div key={stream.id} className="stream-item">
                        <img src={stream.image} alt={stream.title} />
                        <div className="stream-content">
                            <h3>{stream.title}</h3>
                            <p>{stream.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
