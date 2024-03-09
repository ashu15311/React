import { useState } from 'react'
import './App.css'

function App() {
const[name,setname]=useState(true)
  return (
    <>{
      name?<h1>Hello</h1>:null
    }
      {/* <button onClick={()=>setname(true)}>Show</button>
      <button onClick={()=>setname(false)}>Hide</button> */}
      <button onClick={()=>setname(!name)}>Hide</button> 
    </>
  )
}

export default App
