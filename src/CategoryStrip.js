// CategoryStrip.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryStrip.css';

const categories = [
  'Business',
  'Analysis',
  'World',
  'Politics',
  'Climate',
  'Entertainment',
  'Sport',
  'Technology',
  'Science',
  'Weather',
  'Crime News',
  'Space',
  'Astronomy',
  'Anime'
  
];

const CategoryStrip = () => {
  const handleScroll = (e) => {
    const container = e.target;
    container.scrollLeft += e.deltaY;
  };

  return (
    <div className="category-strip" onWheel={handleScroll}>
      {categories.map(category => (
        <Link to={`/stream/${category.toLowerCase()}`} key={category} className="category-link">
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryStrip;
