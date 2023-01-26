import React from 'react'
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PublicRoute = ({ isAuthenticated, component: Component,...rest }) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <Redirect to="/blogs" />
        ):(
            <Component {...props} />            
        )
    ) } />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute)
