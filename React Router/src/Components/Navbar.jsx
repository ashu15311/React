import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
    return (
        <div>
            <ul className='navbar'>
                <li><NavLink className="links" to="/">Home</NavLink></li>
                <li><NavLink className="links" to="/about">About</NavLink></li>
                <li><NavLink className="links" to="/contacts">Contacts</NavLink></li>
                <li><NavLink className="links" to="/products">Products</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar