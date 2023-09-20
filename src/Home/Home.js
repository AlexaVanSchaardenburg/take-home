import '../Home/Home.css';
import Header from '../Header/Header'
import Card from '../Card/Card'

function Home({ data }) {

  return (
    <div className="Home">
      <Header />
      {data.map(article => <Card data={article} />)}
    </div>
  );
}

export default Home;
