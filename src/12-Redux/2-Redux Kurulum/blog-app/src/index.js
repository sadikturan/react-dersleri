import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import "./App.css"

import { createStore } from 'redux'

const initialState = {
    count: 5
}

// store
const store = createStore((state = initialState) => {
    return state
});

// get state
console.log(store.getState())

// INCREMENT, DECREMENT, RESET => ACTIONS (Object)

// DISPATCH

// REDUCERS


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
