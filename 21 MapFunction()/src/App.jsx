import './App.css'

function App() {
  const arr = ["AAA", "BBB", "CCC", "DDD"];
  return (
    <>
      {
        arr.map((item) =>
          <h1>This is {item}</h1>
        )
      }

    </>
  )
}

export default App
