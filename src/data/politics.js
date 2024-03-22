import React, { useState, useEffect } from 'react';

function PoliticsNews() {
    const [politicsNews, setPoliticsNews] = useState([]);
    const [error, setError] = useState(null);
    const [displayedCards, setDisplayedCards] = useState(9);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiKey = '1bfc4ed1715a40d8a186b6abe935fc8e';
        const apiUrl = `https://newsapi.org/v2/everything?q=politics&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data?.articles)) {
                    throw new Error('Invalid data format: articles is not an array');
                }
                
                const articles = data.articles.map((article, index) => ({
                    id: index + 1,
                    title: article.title,
                    content: truncateContent(article.content),
                    imageUrl: article.urlToImage,
                    fullArticleUrl: article.url
                })).filter(article => 
                    article.title && article.content && article.imageUrl && article.fullArticleUrl
                );
                setPoliticsNews(articles);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
                console.error('Error fetching politics news:', error);
            });
    }, []);

    const truncateContent = (content) => {
        const maxLength = 150;
        if (content.length > maxLength) {
            return content.substring(0, maxLength) + '...';
        }
        return content;
    };

    const loadMore = () => {
        setDisplayedCards(prevCount => prevCount + 6);
    };

    if (error) {
        return <div className="alert alert-danger">Error: {error.message}</div>;
    }

    return (
        <div className="container mt-4" style={{ maxWidth: '1200px' }}>
            {isLoading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <>
                    <div className="row">
                        {politicsNews.slice(0, displayedCards).map(article => (
                            <div key={article.id} className="col-md-4 mb-4">
                                <a href={article.fullArticleUrl} className="card h-100 text-decoration-none">
                                    <div className="card-body">
                                        <img src={article.imageUrl} alt={article.title} className="card-img-top mb-3" style={{ height: '200px', objectFit: 'cover' }} />
                                        <h5 className="card-title">{article.title}</h5>
                                        <p className="card-text">{article.content}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    {displayedCards < politicsNews.length && (
                       <div className="text-center mt-4 mb-4">
                       <button className="btn btn-link" onClick={loadMore} style={{ fontSize: '18px', marginRight: '10px', padding: '0', textDecoration: 'none', cursor: 'pointer' }}>▼ Read More</button>
                   </div>                                                                  
                    )}
                </>
            )}
        </div>
    );
}

export default PoliticsNews;
