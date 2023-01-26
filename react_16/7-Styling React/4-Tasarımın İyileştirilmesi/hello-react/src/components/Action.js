import React from 'react';

export default class Action extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: ''
        }
    }
    onFormSubmit(e) {
        e.preventDefault();

        const item = e.target.elements.txtItem.value.trim();
        const error = this.props.addItem(item);
        this.setState({
            error: error
        })
        e.target.elements.txtItem.value = '';
    }

    render() {
        return (
            <div>       
                {this.state.error && <p className="text-danger">{this.state.error}</p>}        
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group">
                        <input className="form-control" type="text" name="txtItem"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Add Item</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
