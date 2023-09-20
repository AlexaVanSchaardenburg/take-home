import '../Card/Card.css';

function Card({ data }) {

  const checkExisits = (data) => {
    if(!data.author || data.title === "[Removed]"){
      return (
        <>
        </>
      )
    } else {
      return (
        <article className="Card">
          <div className="title-and-img">
           {data.urlToImage && <img className="card-img" src={`${data.urlToImage}`} />}
           <p className="card-date">{data.publishedAt}</p>
           <h2 className="card-title">{data.title}</h2>
          </div>
          <p className="card-description">{data.description}</p>
        </article>
      )
      }
  }
  return checkExisits(data);
}

export default Card;