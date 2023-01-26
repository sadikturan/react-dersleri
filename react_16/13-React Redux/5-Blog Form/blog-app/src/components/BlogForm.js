import React, { Component } from 'react'

export default class BlogForm extends Component {
    state = {
        title: '',
        description: ''
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(()=> ({ title }));
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    render() {
        return (
            <div>
                <form>
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
                        <button>Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }
}
