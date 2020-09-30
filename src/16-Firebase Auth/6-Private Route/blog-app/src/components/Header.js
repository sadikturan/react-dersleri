import React from 'react'
import { NavLink } from 'react-router-dom'
import {logout} from '../actions/auth';

const Header = () => {
    return (
        <header>
            <h1>Blog App</h1>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
            <NavLink to="/create" activeClassName="active">Create</NavLink>
            <NavLink to="/contact" activeClassName="active">contact</NavLink>
            <button onClick={logout}>Logout</button>
        </header>
    )
}

export default Header
