import '../Home/Home.css';
import Header from '../Header/Header'
import Card from '../Card/Card'

function Home({ convertTimeFormat, data, setCategory, category }) {

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className="Home">
      <Header />
      <h1>Look at headlines in:</h1>
      <select name="categories" className="drop-down" id="categories-dropdown" value={category} onChange={handleChange}>
        <option value="all">Top Headlines</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
      {data.map(article => <Card convertTimeFormat={convertTimeFormat} data={article} />)}
    </div>
  );
}

export default Home;
