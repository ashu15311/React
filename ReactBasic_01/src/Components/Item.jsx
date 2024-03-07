import './Item.css'
function Item(props){
    const ItemName=props.name;
    return (
        <div>
            <h1 className='item'> {ItemName} </h1>
        </div>
    )
}

export default Item;