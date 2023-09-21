import '../Card/Card.css';
import { NavLink } from 'react-router-dom'

function Card({ convertTimeFormat,data }) {

  const checkExisits = (data) => {
    if(!data.author || data.title === "[Removed]"){
      return (
        <>
        </>
      )
    } else {
      return (
        <NavLink to={`/article/${data.title}`} className="Card">
          <div className="title-and-img">
           {data.urlToImage && <img className="card-img" src={`${data.urlToImage}`} />}
           <p className="card-date">{convertTimeFormat(data.publishedAt)}</p>
           <h2 className="card-title">{data.title}</h2>
          </div>
          <p className="card-description">{data.description}</p>
        </NavLink>
      )
      }
  }
  return checkExisits(data);
}

export default Card;