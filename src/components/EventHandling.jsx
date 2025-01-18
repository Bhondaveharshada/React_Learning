 import './EV.css'

export const EventHandling =()=>{
 
    const handleClickEvent =(event)=>{
        console.log(event);
        console.log("event.target",event.target);
        
        
        alert("this is click event")
    }
    return <>
    {/* { 1. normal function calling on onclick event} */}
       <button onClick={handleClickEvent}> Click Me</button>
       <br />
       <br />
       {/* { 2. fat arrow function calling on onclick event} */}
       <button onClick={()=> handleClickEvent(event)}>Click Me 2</button>  
    </>

}