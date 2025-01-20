 import './EV.css'

export const EventHandling =()=>{
 
    const handleClickEvent =(event)=>{
        console.log(event);
        console.log("event.target",event.target);
        
        
        alert("this is click event")
    };
   
    const handleWelocmeUser = (user)=>{
        console.log(`hey ${user} welcome to this react project`);
        
    }

    return <>
    {/* { 1. normal function calling on onclick event} */}
       <button onClick={handleClickEvent}> Click Me</button>
       <br />
       <br />
       {/* { 2. fat arrow function calling on onclick event} */}
       <button onClick={()=> handleClickEvent(event)}>Click Me 2</button>
       <br /> 
       <br />
       {/* inline event handler and inline arrow funtion */}
       <button onClick={(event)=>console.log(event)}>inline function</button> 
       <br /><br />
       <button onClick={()=>alert("Hey I am inline arrow funtion")}>inline Arr function</button> 
       <br /><br />
       {/* passing arguments to Event handler */}
       <button onClick={() =>handleWelocmeUser("Harshada")}>Click Me 3</button>
       

    </>

}