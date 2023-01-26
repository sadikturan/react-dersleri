import React from 'react';
import {login} from '../actions/auth';

export const LoginPage = () => (
    <div>
        <button onClick={login}>Login</button>
    </div>
);

export default LoginPage;