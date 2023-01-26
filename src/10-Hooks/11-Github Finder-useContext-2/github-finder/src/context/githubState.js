import React, { useReducer } from "react"
import GithubReducer from './githubReducer'
import GithubContext from './githubContext'
import axios from 'axios'

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUsers = (keyword) => {
        setLoading()
        setTimeout(() => {
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res => {
                    dispatch({
                        type: "SEARCH_USERS",
                        payload: res.data.items
                    })
                });
        }, 1000);
        
    }

    const setLoading = () => {
        dispatch({type: "SET_LOADING"})
    }

    return <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers
            }}>
                {props.children}
    </GithubContext.Provider>
}

export default GithubState