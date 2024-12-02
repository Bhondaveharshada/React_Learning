import seriesData from '../api/seriesData.json'
export const NetflixSeries = ()=>{

    return (
     <div>
      {seriesData.map((curElem)=>{
      return (
        <div key= {curElem.id}>

        <h2>Name : {curElem.name}</h2>
        <h3>Rating: {curElem.rating}</h3>
        <p>Summary: {curElem.description}</p>
        <p>Genre: {curElem.genre}</p>
        <p>Cast: {curElem.cast}</p>
        <a href={curElem.watch_url} target='_blank'>
          <button>Watch Now</button>
        </a>
        <br />
      </div>
      );
      })}
     
     </div>
     
     
    )
  };

//export default NetflixSeries;