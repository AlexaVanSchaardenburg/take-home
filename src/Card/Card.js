import '../Card/Card.css';

function Card({ data }) {

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
           <p className="card-date">{convertTimeFormat(data.publishedAt)}</p>
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