import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AppRouter, {history} from './routers/AppRouter';
import "./App.css"
import configureStore from './store/configureStore';
import { getBlogsFromDatabase, clearBlogs  } from './actions/blogs'
import {firebase} from './firebase/firebaseConfig'
import { loginAction, logoutAction } from './actions/auth';

const store = configureStore();

const result = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

let isRendered = false;
const renderApp = () => {
    if(!isRendered) {
        ReactDOM.render(result, document.getElementById('root'));
        isRendered = true;
    }
}

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        store.dispatch(loginAction(user.uid));
        store.dispatch(getBlogsFromDatabase()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/blogs');
            }
        })
       
    } else {
        store.dispatch(logoutAction());
        store.dispatch(clearBlogs());
        renderApp();
        history.push('/');
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
