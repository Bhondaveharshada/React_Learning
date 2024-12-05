import seriesData from '../api/seriesData.json'
import { SeriesCards } from './SeriesCards';
export const NetflixSeries = ()=>{

    return (
     <div>
      {seriesData.map((curElem)=>{
          return (
            <SeriesCards key={curElem.id} data ={curElem}/>
          )
      })};
     
     </div>
     
     
    )
  };

//export default NetflixSeries;