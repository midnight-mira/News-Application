import '../styles/cards.css'
import { useState } from 'react'
import noImage from '../assets/noImage.png'


const Cards = ({ article, isActive, onCardClick, status }) => {
    if (!article.url || article.title === "removed") return null;
    const [toggle, setToggle] = useState(false)
    
    return (
        <div className={status && isActive ? "card-container active" : "card-container"} onClick={onCardClick}>
            <div className="image-container">
                <img src={article.urlToImage || noImage} alt={article.title || "No title available"} />
            </div>
            <div className="card-info-container">
                <h2>{article.title || "No title available"}</h2>
                <div className="article-detail">
                    <p>Author: {article.author}</p>
                    <p>Source: {article.source?.name}</p>
                    <p>Published At: {new Date(article.publishedAt).toLocaleString()}</p>
                </div>
                <div className="article-desc">
                    {article.description}
                </div>
                <div className="article-footer">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Cards