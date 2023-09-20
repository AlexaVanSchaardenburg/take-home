import '../App/App.css';
import Home from '../Home/Home'
import Article from '../Article/Article'
import headlinesData from '../mockData/headlines-data.json'
import { Routes, Route } from 'react-router-dom'

function App() {

  //use a useEffect hook to get all the headlines for the us on page load
    //set headlines data to state
    //State is passed to home and articles

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home data={headlinesData.articles}/>} />
        <Route path='/article/:title' element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
