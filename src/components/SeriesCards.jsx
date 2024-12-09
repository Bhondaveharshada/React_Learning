export const SeriesCards = ({ data, key }) => {
  //console.log(data);
  /* const {data, key} = props.data */
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  const btn_style ={
    padding: "1.2rem 2.1rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:`${rating >= 8.5 ? "#7dcea0" : '#f7dc6f'}`,
    color:"var(--btn-color)",
    fontWeight:"bold",
    cursor:"pointer"
  } 

  const ratingClass = rating >= 8.5 ? "super_hit" : 'average';

  return (
    <div className="card" key={key}>
      <div>
        <img src={img_url} alt="" width="45%" height="37%" />
      </div>
      <div className="card-content">
        <h2>Name : {name}</h2>
        <h2>Rating: <span className={`rating ${ratingClass}`}>{rating}</span></h2>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noreferrer">
          <button style={btn_style}>Watch Now</button>
        </a>
        <br />
        <br />
      </div>
    </div>
  );
};
