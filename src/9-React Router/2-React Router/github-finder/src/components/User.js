import React, { Component } from 'react'

class User extends Component {
    render() {
        const {login,avatar_url,html_url} = this.props.user;
        return (
                <div className="col-md-4 col-sm-6 col-lg-3">
                    <div className="card mt-2">
                        <img src={avatar_url} alt="" className="img-fluid"/>
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <a href={html_url} className="btn btn-primary btn-sm">Go Profile</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default User
