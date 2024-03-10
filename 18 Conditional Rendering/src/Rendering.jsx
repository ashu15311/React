import { useState } from 'react'
function Rendering(){
    const[render,setRender]=useState(2)
    return(
        <div>
            {render==1?<h1>Hello Ashu</h1>: render==2?<h1>Hello Rahul</h1>: <h1>Hello Guest</h1>}
        </div>
        
    )
}
export default Rendering;