import './App.css'
import Create from './Components/Create'
import Read from './Components/Read';
import Update from './Components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/edit" element={<Update />} />
      </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;
