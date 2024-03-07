import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  let fastfood = ["Chowmein", "Pasta", "Manchurian", "Maggi"]
  return <>
    <h1>Fast Fooood</h1>
    <ul className="list-group">
      {fastfood.map((item) => (
        <li className='list-group-item'>{item}</li>
      ))}
    </ul>
  </>

}

export default App
