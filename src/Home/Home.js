import '../Home/Home.css';
import Header from '../Header/Header'
import Card from '../Card/Card'

function Home({ data }) {

  return (
    <div className="Home">
      <Header />
      <select name="categories" className="drop-down" id="categories-dropdown">
        <option value="business">Business</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
      <h1>Today's Headlines</h1>
      {data.map(article => <Card data={article} />)}
    </div>
  );
}

export default Home;
