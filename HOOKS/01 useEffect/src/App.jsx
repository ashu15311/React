import { useState,useEffect} from 'react'
import './App.css'

function App() {
const[count,setCount]=useState(0);
const[count2,setCount2]=useState(0);
useEffect(() => {
  // document.title = `You clicked ${count} times`;
  alert("Are mai chal Raha hun !");
}, [count2]);

  return (
    <>
      <h1>Count is:{count}</h1>
      {/* <button onClick={()=>setCount(count+1)}>Clicked {count}</button> */}
      {/* <button onClick={()=>setCount2(count2+1)}>Clicked {count2}</button> */}
      <button type="button" class="btn btn-outline-primary" onClick={()=>setCount2(count2+1)}>Clicked {count2}</button>
      <button type="button" class="btn btn-outline-primary" onClick={()=>setCount(count+1)}>Clicked {count}</button>
    </>
  )
}

export default App
