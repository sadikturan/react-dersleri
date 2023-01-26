import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import Alert from './Alert'
import About from './About'
import axios from 'axios'
import UserDetails from './UserDetails'

const App = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)
    const [repos, setRepos] = useState([])

    const searchUsers = (keyword) => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res => {
                    setUsers(res.data.items)
                    setLoading(false)
                });
        }, 1000);
        
    }

    const getUser = (username) => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}`)
                .then(res => {
                    setUser(res.data)
                    setLoading(false)
                });
        }, 1000);   
    }

    const getUserRepos = (username) => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(res => {
                    setRepos(res.data)
                    setLoading(false)
                });
        }, 1000);   
    }

    const clearUsers = () => {
        setUsers([])
    }

   const showAlert = (msg, type) => {
        setAlert({msg,type})

        setTimeout(() => {
            setAlert({ alert: null })
        }, 3000);
    }

    
    return (
        <BrowserRouter>
            <Navbar />
            <Alert alert= {alert}/>
            <Switch>
                    <Route exact path="/" render={ props=> (
                            <>
                                <Search 
                                    searchUsers={searchUsers} 
                                    clearUsers={clearUsers} 
                                    showClearButton = {users.length > 0? true:false}
                                    setAlert={showAlert}
                                    />
                                <Users users={users} loading={loading}/>
                            </>
                        )
                    } />
                    <Route path="/about" component={About} />
                    <Route path="/user/:login" render= {props => (
                        <UserDetails 
                            {...props} 
                            getUser= {getUser} 
                            getUserRepos = {getUserRepos}
                            user={user} 
                            repos= {repos}
                            loading={loading}/>
                    )} />
            </Switch>
        </BrowserRouter>
    )
  
}

export default App
