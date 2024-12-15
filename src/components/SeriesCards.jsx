import styles from './Netflix.module.css';
import styled from 'styled-components';
export const SeriesCards = ({ data, key }) => {
  //console.log(data);
  /* const {data, key} = props.data */
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

/*   const btn_style ={
    padding: "1.2rem 2.1rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:`${rating >= 8.5 ? "#7dcea0" : '#f7dc6f'}`,
    color:"var(--btn-color)",
    fontWeight:"bold",
    cursor:"pointer"
  }  */


  const ButtonWatch = styled.button({
    padding: "1.2rem 2.1rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:`${rating >= 8.5 ? "#7dcea0" : '#f7dc6f'}`,
    color:"var(--btn-color)",
    fontWeight:"bold",
    cursor:"pointer"
  })

  const ButtonWatchTemp = styled.button`
    padding: 1.2rem 2.1rem ;
    border:none;
    font-size:1.6rem;
    background-color:${(props)=>props.rating >= 8.5 ? "#7dcea0" : '#f7dc6f'};
    color:var(--btn-color);
    font-weight:bold;
    cursor:pointer;
  `

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <div className={styles.card}  key={key}>
      <div>
        <img src={img_url} alt="" width="45%" height="37%" />
      </div>
      <div className={styles['card-content']}>
        <h2>Name : {name}</h2>
        <h2>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h2>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noreferrer">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonWatch >Watch Now</ButtonWatch>
          <ButtonWatchTemp rating= {rating}>Watch Nowww</ButtonWatchTemp>
        </a>
        <br />
        <br />
      </div>
    </div>
  );
};
