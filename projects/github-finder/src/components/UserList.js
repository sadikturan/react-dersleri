import React from 'react'
import { useContext } from 'react';
import { UsersContext } from '../context/usersContext';
import Loading from './Loading';
import User from './User';

const UserList = () => {
    const { loading, users } = useContext(UsersContext);
    if(loading) {
        return <Loading/>;
    }
    return (
        <div className="mt-3">
            { users.map(user => (
                <User user={user} key={user.id} /> 
            ))}
        </div>
    )
}

export default UserList