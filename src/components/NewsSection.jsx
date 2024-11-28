import React from 'react'
import '../styles/newsSection.css'
import noImage from '../assets/noImage.png'

const NewsSection = (article) => {
  const object = article.article
  return (
    <div className="main-container">
      <div className='cross-button'>
        <button>wrong button</button>
      </div>

      <div className='news-container'>
      <h2>{object.title}</h2>

      <div className="news-info">
        <p><strong>By:</strong> {object.author || "NA"},</p>
        <p><strong>Source: </strong>{object.source.name || "NA"}, </p>
        <p><strong>Published at: </strong>{object.publishedAt || "NA"}</p>
      </div>

      <div className="news-img">
        <img src={object.urlToImage || noImage} alt="" />
      </div>

      <div className="news-desc">
      <h3>TL DR</h3>
        {object.description}
      </div>

      <div className="news-content">
        <h3>News</h3>
        <p>
          {object.content}
        </p>
      </div>

      <div className="news-footer">
        <h4>Read more at: </h4>
        <a href={object.url}>{object.source.name}</a>
      </div>
      </div>

    </div>
  )
}

export default NewsSection