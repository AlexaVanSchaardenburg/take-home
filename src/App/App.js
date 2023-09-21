import '../App/App.css';
import Home from '../Home/Home'
import Article from '../Article/Article'
import Error from '../Error/Error'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'

function App() {

  const [articleData, setArticlesData] = useState(null)
  const [error, setError] = useState(null)
  const [category, setCategory] = useState(null)

  useEffect(() => {
    if (category === "Top Headlines" || !category) {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e')
        .then(res => res.json())
        .then(res => setArticlesData(res.articles))
        .catch(err => setError(err))
    } else {
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e`)
        .then(res => res.json())
        .then(res => setArticlesData(res.articles))
        .catch(err => setError(err))
    }
  }, [category])

  const convertTimeFormat = (inputTime) => {
    const inputDate = new Date(inputTime);

    const months = [
      "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
    ];

    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();
    let hours = inputDate.getHours();
    const minutes = inputDate.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';

    if (hours === 0) {
      hours = 12;
    } else if (hours > 12) {
      hours -= 12;
    }

    const formattedTime = `${month}-${day}-${year} at ${hours}:${minutes}${ampm}`;
    return formattedTime;
  }

  const handleError = () => {
    return <p>There was an error on our end, please check back later</p>
  }

  const displayArticles = () => {
    if (error) {
      return <p>There was an error on our end, please check back later</p>
    } else {
      return (
        <div className="App">
          <Routes>
            <Route path='/' element={<Home convertTimeFormat={convertTimeFormat} data={articleData} setCategory={setCategory} category={category} />} />
            <Route path='/article/:title' element={<Article convertTimeFormat={convertTimeFormat} data={articleData} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      )
    }
  }

  return (
    <>
      {!articleData ? <p>loading...</p> : displayArticles()}
    </>
  );
}

export default App;
