import '../App/App.css';
import Home from '../Home/Home'
import Article from '../Article/Article'
import headlinesData from '../mockData/headlines-data.json'
import { Routes, Route } from 'react-router-dom'

function App() {

  //use a useEffect hook to get all the headlines for the us on page load
    //set headlines data to state
    //State is passed to home and articles

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

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home convertTimeFormat={convertTimeFormat} data={headlinesData.articles}/>} />
        <Route path='/article/:title' element={<Article convertTimeFormat={convertTimeFormat} data={headlinesData.articles}/>} />
      </Routes>
    </div>
  );
}

export default App;
