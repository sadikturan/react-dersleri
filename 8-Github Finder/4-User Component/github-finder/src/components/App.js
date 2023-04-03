import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import User from './User'

export class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <User />
                <User />
                <User />
            </>
        )
    }
}

export default App
