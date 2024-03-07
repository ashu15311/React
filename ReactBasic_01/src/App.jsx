import './App.css'
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'

function App() {
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"January",
      itemYear:"2004"
    },
    {
      itemName:"Vim",
      itemDate:"18",
      itemMonth:"May",
      itemYear:"2002"
    },
    {
      itemName:"Surf Excel",
      itemDate:"3",
      itemMonth:"June",
      itemYear:"1986"
    },
]
  return (
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}>Pehla</ItemDate>
      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}>Dusra</ItemDate>
      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}>Teesra</ItemDate>
    <h1>Hello Jee</h1>
    </div>
  )
}

export default App;
