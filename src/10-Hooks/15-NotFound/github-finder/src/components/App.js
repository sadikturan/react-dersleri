import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import NotFound from './NotFound'
import Home from './Home'
import Alert from './Alert'
import About from './About'
import UserDetails from './UserDetails'
import GithubState from '../context/github/githubState'
import AlertState from '../context/alert/alertState'

const App = () => {    
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar />
                    <Alert />
                    <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About} />
                            <Route path="/user/:login" component={UserDetails}/>
                            <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </AlertState>
        </GithubState>                
    )
  
}

export default App
