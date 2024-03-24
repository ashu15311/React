import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum impedit quia maiores placeat? Quasi natus repellat totam, blanditiis facere quod ipsam harum vero! Ab suscipit enim eum quo, iure explicabo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum minus obcaecati non dolorem, est qui quos aliquam consequuntur commodi quas neque dicta soluta asperiores, voluptatem, iste incidunt ad. Explicabo at odit placeat est, consequuntur, eos ipsa reiciendis praesentium dolore dolorem voluptatem saepe molestias quia rerum nemo. Praesentium voluptatem quia tenetur fugit fugiat repudiandae quo, error distinctio suscipit magni atque aliquid eveniet maxime voluptatum dolorem eligendi quae magnam nesciunt possimus reprehenderit repellendus autem iure mollitia impedit. Corrupti, tempora optio suscipit reiciendis maiores architecto fuga odit minima reprehenderit cupiditate nesciunt voluptatibus perspiciatis aliquid neque explicabo asperiores quisquam quasi unde itaque accusamus.
            </p>
            <Link to="/about">About</Link>
            <button onClick={()=>navigate('/about')}>About</button>
            <button onClick={()=>navigate('/contacts')}>Contacts</button>
        </div>
    )
}

export default Home;