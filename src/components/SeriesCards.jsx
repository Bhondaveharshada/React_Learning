export const SeriesCards = (props) =>{
    console.log(props);
    
    return (
        <div key= {props.key}>

        <h2>Name : {props.curElem.name}</h2>
        <h3>Rating: {props.curElem.rating}</h3>
        <p>Summary: {props.curElem.description}</p>
        <p>Genre: {props.curElem.genre}</p>
        <p>Cast: {props.curElem.cast}</p>
        <a href={props.curElem.watch_url} target='_blank'>
          <button>Watch Now</button>
        </a>
        <br />
      </div>
      );
}