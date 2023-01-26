import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import "./App.css"

import { createStore, combineReducers } from 'redux'

const state = {
    blogs: [
        {
            id: 1,
            title: 'blog title 1',
            description: 'blog description 1',
            dateAdded: 0
        }
    ],
    auth: {
        userid: 1,
        username: 'sadikturan',
        email: 'info@sadikturan.com'
    }
}

const blogState = []

const blogReducer = (state = blogState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const authState = {};

const authReducer = (state = authState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        blogs: blogReducer,
        auth: authReducer
    })
);

console.log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
