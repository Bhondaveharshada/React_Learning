import seriesData from '../api/seriesData.json'
import { SeriesCards } from './SeriesCards';
export const NetflixSeries = ()=>{

    return (
     <div className="grid grid-three--cols">
      {seriesData.map((curElem)=>{
          return (
            <SeriesCards key={curElem.id} data ={curElem}/>
          )
      })} ===following is profile component===

     </div>
     
     
     
    )
  }

//export default NetflixSeries;