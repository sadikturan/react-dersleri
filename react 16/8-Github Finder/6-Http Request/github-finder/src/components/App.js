import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import User from './User'
import Users from './Users'
import axios from 'axios'

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios
            .get('https://api.github.com/users')
            .then(res => this.setState({users: res.data}));
    }
    render() {
        return (
            <>
                <Navbar />
                <Users users={this.state.users}/>
            </>
        )
    }
}

export default App
