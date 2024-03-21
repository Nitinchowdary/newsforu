import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PoliticsNews from './data/politics'; // Import PoliticsNews component

const StreamDetail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{id.charAt(0).toUpperCase() + id.slice(1)} News</h2>
            <PoliticsNews /> {/* Render PoliticsNews component for politics stream */}
        </div>
    );
};

export default StreamDetail;
