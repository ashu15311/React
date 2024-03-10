import { useState } from 'react'
function Conditional() {
    const [loggedIn, setLoggedIn] = useState(false)
    if (loggedIn) {
        return (
            <h1>Hello User</h1>
        )

    }
    else {
        return (
            <h1>Hello Guest</h1>
        )
    }
}
