import { createStore, combineReducers } from 'redux'
import blogReducer from '../reducers/blogs';
import authReducer from '../reducers/auth';

export default () => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            auth: authReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

