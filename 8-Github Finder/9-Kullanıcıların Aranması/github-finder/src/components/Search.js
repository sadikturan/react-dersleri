import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword: ''
        }
    }

    onChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.searchUsers(this.state.keyword);
        this.setState({ keyword: '' });
    }

    render() {
        return (
           <form onSubmit={this.onSubmit}>
               <div className="container my-3">
                <div className="input-group">
                    <input type="text" value={this.state.keyword} onChange={this.onChange} className="form-control" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
               </div>
           </form>
        )
    }
}

export default Search
