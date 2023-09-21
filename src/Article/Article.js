import '../Article/Article.css';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Article({ data }) {

  const [article, setArticle] = useState(null)

  let title = useParams()

  useEffect(() => {
    setArticle(data.find(article => article.title === title.title));
  }, []);
  
  const buildArticle = () => {
    return (
      <>
        <h1>{article.title}</h1>
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