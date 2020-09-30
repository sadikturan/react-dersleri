import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const HomePage = () => (
    <div>Home Page</div>
);

const ContactPage = () => (
    <div>Contact Page</div>
);

const ProductsPage = () => (
    <div>Products Page</div>
);

const NotFound = () => (
    <div>404 Page</div>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/contact" component={ ContactPage } />
            <Route path="/products" component={ ProductsPage } />
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));