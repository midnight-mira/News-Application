import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
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
      <div className='container scrollable'>
        <div className='feed-container '>
          <Outlet context={{ handleShowNews, clickedArticle }} />
        </div>
        
        {showNews === true ?
          <div className='news-container'>
            <NewsSection article={clickedArticle} onClose={()=>setShowNews(false)} />
          </div>
          :
          ""
        }

      </div>
    </div>

  )
}

export default Layout