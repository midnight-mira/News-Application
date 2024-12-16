import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Cards from './Cards';
import '../styles/feed.css';
import { fetchData, fetchDataWithCategory } from '../hooks/dataFetching.js';

const Feed = ({ category = 'default' }) => {
  const { handleShowNews, clickedArticle } = useOutletContext();
  const [data, setData] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      const newsData = category === 'default' ? await fetchData() : await fetchDataWithCategory(category);
      setData(newsData?.articles || []);
    };
    fetchNewsData();
  }, [category]);

  const handleCardClick = (article, index) => {
    setActive(index);
    handleShowNews(article);
  };

  return (
    <div className="feed-container">
      {data ? (
        data.map((article, index) => (
          <Cards
            key={index}
            article={article}
            isActive={active === index}
            onCardClick={() => handleCardClick(article, index)}
            status={clickedArticle}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Feed;
