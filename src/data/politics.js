import React, { useState, useEffect } from 'react';

function PoliticsNews() {
    const [politicsNews, setPoliticsNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = '1bfc4ed1715a40d8a186b6abe935fc8e';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=${apiKey}`;

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
                    content: article.content,
                    imageUrl: article.urlToImage,
                    fullArticleUrl: article.url
                }));
                setPoliticsNews(articles);
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching politics news:', error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleRedirect = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="container">
            <div className="row">
                {politicsNews.map(article => (
                    <div key={article.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <img src={article.imageUrl} alt={article.title} className="card-img-top" style={{border: "1px solid #ccc"}} onClick={() => handleRedirect(article.fullArticleUrl)} />
                            <div className="card-body">
                                <h5 className="card-title" onClick={() => handleRedirect(article.fullArticleUrl)} style={{cursor: "pointer"}}>{article.title}</h5>
                                <p className="card-text">{article.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PoliticsNews;
