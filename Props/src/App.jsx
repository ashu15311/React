import { useState } from 'react'

import './App.css';
import Student from './Components/Student';
import Pile from './Components/Pile';

function App() {
  return (
    <div>
      <Student name="Ashu"></Student>
      <Student name="Pinu"></Student>
      <Student name="Ratha"></Student>
      <Pile></Pile>
    </div>
  )
}

export default App
