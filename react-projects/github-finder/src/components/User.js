import React from 'react'
import { Link } from 'react-router-dom';

const User = (props) => {
    const { avatar_url,login,html_url } = props.user;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3">
                    <img className='img-fluid rounded-start avatar' src={ avatar_url }  alt={ login } />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h3 className="card-title">{ login }</h3>
                        <a href={ html_url } className='btn btn-primary' target="_blank" rel="noreferrer">Github Profile</a>
                        <Link to={`users/${login}`}>details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User