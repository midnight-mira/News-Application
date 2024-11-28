import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Feed from './components/Feed'
import Navbar from "./components/Navbar"
import './Layout.css'
import NewsSection from './components/NewsSection'

const Layout = () => {
  const [showNews, setShowNews] = useState(false)
  const [clickedArticle, setClickedArticle] = useState(false)

  const handleShowNews = (article) => {
    if (clickedArticle && clickedArticle.title === article.title) {
      setShowNews(false);
      setClickedArticle(null);
    } else {
      setShowNews(true);
      setClickedArticle(article);
      console.log(clickedArticle)
    }
  };

  return (
    <div className="body">
      <div className="navbar">
        <Navbar />
      </div>
      <h2>Name</h2>
      <div className='container scrollable'>
        <div className='feed-container '>
          <Feed change={handleShowNews} status={clickedArticle} />
        </div>
        
        {showNews === true ?
          <div className='news-container'>
            <NewsSection article={clickedArticle} />
          </div>
          :
          ""
        }

      </div>
    </div>

  )
}

export default Layout