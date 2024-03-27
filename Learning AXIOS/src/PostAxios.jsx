import Axios from 'axios';
import React, { useState } from 'react'

function PostAxios() {
    const [myTitle, setTitle] = useState('');
    const [myBody, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: myTitle,
            body: myBody
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label htmlFor="">Enter Body:</label>
                <input type="text" onChange={(e) => setBody(e.target.value)} />
                <br />
                <input type="submit" value='Post' />
            </form>
        </div>
    )
}

export default PostAxios