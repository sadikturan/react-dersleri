class TodoApp extends React.Component {
    render() {
        const app = {
            title: "Todo Application",
            description: "Lorem, ipsum dolor.",
            items: ['item 1','item 2']
        }; 

        return (
            <div>
                <Header title={app.title} description={app.description} />
                <TodoList items={app.items} />
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
            <ul>
                {
                    this.props.items.map((item,index) => 
                        <TodoItem key={index} item={item}/>
                    )
                }
            </ul>
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
    render() {
        return (
            <div>
                <p>
                    <button>Clear Items</button>
                </p>
                <form>
                    <input type="text" name="txtItem"/>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));