export const SeriesCards = ({data,key}) =>{
    //console.log(data);
    /* const {data, key} = props.data */
    const {img_url, name, rating,description, cast, genre, watch_url} = data
    
    return (
        <div key= {key}>
         <div>
          <img src={img_url} alt=""  width="50%"
            height="40%" />
         </div>
        <h2>Name : {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target='_blank' rel="noreferrer">
          <button>Watch Now</button>
        </a>
        <br />
        <br />
      </div>
      );
}