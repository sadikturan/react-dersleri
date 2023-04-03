import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    login: "ezmobius",
                    id: 5,
                    avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
                    html_url: "https://github.com/ezmobius",
                  },
                  {
                    login: "ivey",
                    id: 6,
                    avatar_url: "https://avatars0.githubusercontent.com/u/6?v=4",
                    html_url: "https://github.com/ivey",
                  },
                  {
                    login: "evanphx",
                    id: 7,
                    avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4",
                    html_url: "https://github.com/evanphx",
                  },
                  {
                    login: "evanphx",
                    id: 7,
                    avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4",
                    html_url: "https://github.com/evanphx",
                  },
                  {
                    login: "evanphx",
                    id: 7,
                    avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4",
                    html_url: "https://github.com/evanphx",
                  }
            ]
        }
    }
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    {this.state.users.map(user => (
                        <User user={user} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Users
