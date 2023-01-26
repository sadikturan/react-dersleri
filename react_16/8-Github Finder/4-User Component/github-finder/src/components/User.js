import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '19492591',
            name: 'Sadık Turan',
            login: 'sadikturan',
            avatar_url: "https://avatars1.githubusercontent.com/u/19492591?v=4",
            html_url: "https://github.com/sadikturan",
            followers: 1032,
            blog: "sadikturan.com"
        }
    }
    render() {
        const {name,login,avatar_url,html_url,followers,blog} = this.state;
        return (
            <div>
                <div className="card m-2">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={avatar_url} alt="" className="card-img"/>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Followers: {followers}</p>
                                <p className="card-text">Blog: {blog}</p>
                                <a href={html_url} className="btn btn-primary btn-sm">Go Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
