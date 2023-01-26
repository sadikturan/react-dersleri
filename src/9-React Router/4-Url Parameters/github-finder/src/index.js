import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './styles/main.scss';
import App from './components/App'

ReactDOM.render(<AppRouter/>, document.getElementById('root'));