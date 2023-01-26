import React, { Component } from 'react'

class UserDetails extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        return (
            <div>
                {this.props.user.name}
            </div>
        )
    }
}

export default UserDetails
