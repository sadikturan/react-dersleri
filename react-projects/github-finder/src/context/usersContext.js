import React, { useReducer }  from "react";
import UsersReducer from "../reducers/usersReducer";

export const UsersContext = React.createContext();

const UsersContextProvider = (props) => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }
      
    const [state, dispatch] = useReducer(UsersReducer, initialState);

    const searchUsers = (keyword) => {
        setLoading();

        setTimeout(() => {
            fetch("https://api.github.com/search/users?q=" + keyword)
            .then(response => response.json())
            .then(data => {
                dispatch({
                type: "SEARCH_USERS",
                users: data.items
                });
            });
        }, 1000);
    }

    const getUser = (username) => {
        setLoading();

        setTimeout(() => {
            fetch("https://api.github.com/users/" + username)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "GET_USER",
                    user: data
                });
            });
        }, 1000);
    }

    const setLoading = () => {
        dispatch({ type: "SET_LOADING" });
    }
    const clearUsers = () => {
        dispatch({ type: "CLEAR_USERS" });
    }

    return (
        <UsersContext.Provider value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser
        }}>
            { props.children }
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;