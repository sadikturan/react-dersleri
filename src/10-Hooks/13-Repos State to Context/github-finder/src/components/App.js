import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import Alert from './Alert'
import About from './About'
import axios from 'axios'
import UserDetails from './UserDetails'
import GithubState from '../context/githubState'

const App = () => {    
    const [alert, setAlert] = useState(null)
    
    const showAlert = (msg, type) => {
        setAlert({msg,type})

        setTimeout(() => {
            setAlert({ alert: null })
        }, 3000);
    }

    return (
        <GithubState>
            <BrowserRouter>
            <Navbar />
            <Alert alert= {alert}/>
            <Switch>
                    <Route exact path="/" render={ props=> (
                            <>
                                <Search                                     
                                    setAlert={showAlert}
                                    />
                                <Users />
                            </>
                        )
                    } />
                    <Route path="/about" component={About} />
                    <Route path="/user/:login" component={UserDetails}/>
            </Switch>
        </BrowserRouter>
        </GithubState>                
    )
  
}

export default App
