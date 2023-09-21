import '../Article/Article.css';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Article({ convertTimeFormat, data }) {

  const [article, setArticle] = useState(null)

  let title = useParams()

  useEffect(() => {
    setArticle(data.find(article => article.title === title.title));
  }, []);

  const buildArticle = () => {
    return (
      <>
        <h1>{article.title}</h1>
        {article.urlToImage && <img className="article-img" src={`${article.urlToImage}`} />}
        <p className="article-date info">{convertTimeFormat(article.publishedAt)}</p>
        <p className="article-author info">By {article.author}</p>
        <p className="article-source info">From {article.source.name}</p>
        <p className="article-content info">{article.content}</p>
        <a href={article.url} className="article-button">View original article</a>
      </>
    )
  }

  return (
    <div className="Article">
      <Header />
      {article ? buildArticle() : <p>loading</p>}
    </div>
  );
}

export default Article;