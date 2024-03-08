import { useState } from 'react';

function App() {
  // let greet="Hiii";
  let[greet,update]=useState(0)
  function add(){
    // greet="Hello";  // but here the UI doesnt display Hello when hovered
    // alert("Mouse over");
    update(greet+1);
  }
  function sub(){
    update(greet-1);
  }
return (
  <>
    <button onClick={add}>+</button>
    <h1>{greet}</h1>
    <button onClick={sub}>-</button>
    <button onClick={()=>{alert("Arrow")}}>Arrow Fn</button>
  </>
  )
}

export default App
