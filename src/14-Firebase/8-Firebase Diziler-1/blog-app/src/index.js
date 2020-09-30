import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import "./App.css"
import configureStore from './store/configureStore';
import { addBlog,removeBlog,editBlog  } from './actions/blogs'
import './firebase/firebaseConfig'

const store = configureStore();

store.subscribe(()=> {
    // console.log(store.getState());
}) 

const blog1 = store.dispatch(addBlog({title: 'blog title 1', description: 'blog description 1'}))
const blog2 = store.dispatch(addBlog({title: 'blog title 2', description: 'blog description 2', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'blog title 3', description: 'blog description 3', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'blog title 4', description: 'blog description 4', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'blog title 5', description: 'blog description 5', dateAdded: Date.now()}))

store.dispatch(removeBlog({id: blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id, { title: 'updated blog title', description: 'updated blog description' }))

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
