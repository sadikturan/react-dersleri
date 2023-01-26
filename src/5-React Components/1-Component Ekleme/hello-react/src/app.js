class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <TodoList />
                <Action />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo Application</h1>
                <div>Lorem, ipsum dolor.</div>
            </div>
        );
    }   
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        );
    }
}

class TodoItem extends React.Component {
    render() {
        return (
            <li>Todo item</li>
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