import React from 'react'
import Cards from './Cards'
import '../styles/feed.css'
import { useEffect, useState } from 'react'
import { fetchData, fetchDataWithCategory } from '../hooks/dataFetching.js'

const Feed = ({ category = 'default', change, status }) => {
  const [data, setData] = useState(null)
  const [active, setActive] = useState(false)
  console.log(status)

  useEffect(()=>{
    const fetchNewsData = async() =>{
      const newsData = category == 'default' ? await fetchData() : await fetchDataWithCategory(category)
      if(newsData){
        setData(newsData.articles)
        console.log(newsData.articles)
      }
    }
    fetchNewsData()
  }, [category]);

  const handleCardClick =(article, index) =>{
    setActive(index)
    if (change ) {
      change(article)
    }
  }
    
  return (
    <div className="feed-container">
      {data ? (
        data.map((article, index) => <Cards 
        key={index} 
        article={article} 
        isActive={active === index}
        onCardClick ={() => handleCardClick(article, index)} 
        status={status}
        />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Feed