// StreamDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import politicsNews from './data/politics'; // Import data directly

const streamData = {
    politics: politicsNews,
    // Add data for other streams as needed
};

const StreamDetail = () => {
    const { id } = useParams();
    const data = streamData[id]; // Use id directly
    const [streamDetails, setStreamDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Trying to load data for stream: ${id}`);

                if (data) {
                    setStreamDetails({ title: `${id} News`, news: data });
                } else {
                    throw new Error(`Data not found for stream: ${id}`);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching stream details:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id, data]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!streamDetails) {
        return <p>Error loading data for {id}.</p>;
    }

    return (
        <div>
            <h2>{streamDetails.title}</h2>
            {streamDetails.news.map(news => (
                <div key={news.id}>
                    <h3>{news.title}</h3>
                    <p>{news.content}</p>
                </div>
            ))}
        </div>
    );
};

export default StreamDetail;
