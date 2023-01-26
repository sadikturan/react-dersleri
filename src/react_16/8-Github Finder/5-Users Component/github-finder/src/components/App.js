import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import User from './User'
import Users from './Users'

export class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Users />
            </>
        )
    }
}

export default App
