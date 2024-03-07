import './App.css'

// ---------------------- if-else -------------------------------
// function App() {
//   let fruits = ["Apple", "Orange", "Banana", "Papaya"];
//   // let fruits = [];

//   if (fruits.length === 0) {
//     return <h3>Kuch to dede bhai !</h3>
//   }
//   return (<>
//     {fruits.map((item) => (
//       <h1 key={item}>{item}</h1>
//     ))}
//   </>)
// }

// ------------------  Ternary ----------------------------------------
// function App(){
//   let fruits = ["Apple", "Orange", "Banana", "Papaya"];
//   return(<>
//     {fruits.length===0 ? <h1>Kuch to dede Bhai !</h1> : <h3>Ok</h3> }
//     </>
//   )
// }

// Logical AND && 
function App(){
    let fruits = ["Apple", "Orange", "Banana", "Papaya"];
    return(<>
     {fruits.length!==0 && <h3>Ok</h3> }
      </>
    )
  }


export default App
