import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import "./App.css"

import { createStore } from 'redux'

const initialState = {
    count: 0
}

// store
const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state
    }
});


store.subscribe(() => {
    console.log(store.getState())
})

// INCREMENT, DECREMENT, RESET => ACTIONS (Object)
store.dispatch({
    type: "INCREMENT",
    incrementBy: 10
})

store.dispatch({
    type: "INCREMENT"
})

store.dispatch({
    type: "DECREMENT"
})

store.dispatch({
    type: "RESET"
})

// DISPATCH

// REDUCERS


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
