import { useState } from "react";

function App(){
  const[Name,setname]=useState(null);
  const[Print,setPrint]=useState(false);
  function typed(e){
    setname(e.target.value);
    setPrint("")
  }
  // function clicked(){
  //   setname{};
  // }
  return(
    <div>
      <h1>Get Input Data in the text Box</h1>
      <input type="text" placeholder="Enter Your Name" onChange={typed}/>
      {
        Print?<h1>Hello {Name}</h1>:null
      }
      
      <button onClick={()=>setPrint(true)}>Print</button>
    </div>
  )
}

export default App;