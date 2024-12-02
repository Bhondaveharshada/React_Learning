import { useState } from "react";


const AdditionOfNumbers = () =>{
    const [ num1,setNum1] = useState('');
    const [num2 , setNum2] = useState('');
    const [result,setResult] = useState(null);
   
  function Add(){
   const sum = parseFloat(num1) + parseFloat(num2);
   if(!isNaN(sum)){
    setResult(sum)
   }else{
    setResult("invalid Input")
   }

  }
    return (
        <>
         <div>
            <input type="text" placeholder="Enter a 1st Number" value={num1} onChange={(e)=>setNum1(e.target.value)}   style={{ width: "300px", height: "40px", fontSize: "18px" }}/>
            <br /> <br /><br />
            <input type="text" placeholder="Enter a 2nd Number" value={num2} onChange={(e)=>setNum2(e.target.value)}   style={{ width: "300px", height: "40px", fontSize: "18px" }}/>
         </div>
         <button onClick={Add} style={{ width:"20%",marginTop: "10px", fontSize: "18px", padding: "10px 20px" }}>Add</button>
         <h2>{result!==null && <h2>Result: {result}</h2>}</h2>
        </>
    );
}


export default AdditionOfNumbers