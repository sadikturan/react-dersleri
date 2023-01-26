class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.state = {
            items: ['item 1','item 2','item 3','item 4']
        }
    }

    clearItems() {
        this.setState({
            items: []
        });
    } 

    render() {
        const app = {
            title: "Todo Application",
            description: "Lorem, ipsum dolor."            
        }; 

        return (
            <div>
                <Header title={app.title} description={app.description} />
                <TodoList items={this.state.items} clearItems={this.clearItems} />
                <Action />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.description}</div>
            </div>
        );
    }   
}

class TodoList extends React.Component { 
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((item,index) => 
                            <TodoItem key={index} item={item}/>
                        )
                    }
                </ul>
                <p>
                    <button onClick={this.props.clearItems}>Clear Items</button>
                </p>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    render() { 
        return (
            <li>{this.props.item}</li>
        );
    }
}


class Action extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();

        const item = e.target.elements.txtItem.value.trim();
        if(item) {
            console.log(item);
        }
    }

    render() {
        return (
            <div>               
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem"/>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));