import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';


function App() {

  return (
    <div className='container'>
      <Button variant="success">ADD</Button>{' '}
      <input type="number" className='inputBox'/>
      <Button variant="warning">MINUS</Button>{' '}
    </div>
  )
}

export default App
