import { useState } from 'react'
import './App.css'

function App() {
  const [name,setname]=useState("");
  const [tnc,settnc]=useState(false)
  const [interest,setInterest]=useState("")
  function getFormData(e){
    console.log(name,tnc,interest)
    e.preventDefault();
  }
  return (
    <>
      <h1>Handle Form in React</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setname(e.target.value)}/><br />
        <select onChange={(e)=>{setInterest(e.target.value)}}>
          <option>Select Option</option>
          <option>Tom N Jerry</option>
          <option>Pikachu</option>
        </select><br />
        <input type="checkbox" onChange={()=>{settnc(e.target.checked)}}/>Accept Terms and Condition <br />
        <button type='submit'>SUBMIT</button>
      </form>
    </>
  )
}

export default App
