import React from 'react'
import { Link,useParams} from 'react-router-dom'

const User = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>{id} Details Page</h1>       
        </div>
    )
}

export default User