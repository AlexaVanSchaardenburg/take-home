import '../App/App.css';
// import Header from '../Header/Header'
import Home from '../Home/Home'
import Article from '../Article/Article'
// import headlinesData from '../mockData/headlines-data.json'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article/:title' element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
