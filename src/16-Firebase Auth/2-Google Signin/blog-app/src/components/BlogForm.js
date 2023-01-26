import React, { Component } from 'react'


export default class BlogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.blog? props.blog.title: '',
            description: props.blog ? props.blog.description: '',
            error: ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(()=> ({ title }));
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title || !this.state.description) {
           this.setState({error: 'lütfen tüm alanları doldurunuz.'});
        } else {
            this.setState({error: ''});
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                dateAdded: Date.now()
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input 
                            placeholder="enter title" 
                            value={this.state.title}
                            onChange={this.onTitleChange}/>
                    </div>
                    <div>
                        <textarea
                            placeholder="enter description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}></textarea>
                    </div>
                    <div>
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }
}
