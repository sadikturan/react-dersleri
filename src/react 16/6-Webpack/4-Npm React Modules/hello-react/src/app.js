class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ['item 1','item 2','item 3','item 4']
        }
    }

    componentDidMount() {
       const json = localStorage.getItem('items');
       const items = JSON.parse(json);
       
       if(items) {
           this.setState({
               items: items
           })
       }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.items.length !== this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json);
        }
    }

    componentWillUnmount() {
        console.log('component silindi.')
    }

    deleteItem(item) {
     this.setState((prevState) => {
         const arr = prevState.items.filter((i) => {
             return item != i
         })
         return {
             items: arr
         }
     })   
    }

    clearItems() {
        this.setState({
            items: []
        });
    } 

    addItem(item) {

        if(!item) {
            return 'eklemek istediğiniz elemanı girin';
        } else if (this.state.items.indexOf(item) > -1) {
            return 'aynı elemanı ekleyemezsiniz.';
        }

        this.setState((prevState) => {
            return {items: prevState.items.concat(item)}
        })
    }

    render() {
        const app = {
            title: "Todo Application",
            description: "Lorem, ipsum dolor."            
        }; 

        return (
            <div>
                <Header title={app.title} description={app.description} />
                <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems} />
                <Action addItem = {this.addItem}/>
            </div>
        );
    }
}

// React Hook
// Stateless Function Component + Hook => Class Component (state)

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                <div>{props.description}</div>
            </div>
        ); 
}

const TodoList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.items.map((item,index) => 
                        <TodoItem deleteItem={props.deleteItem} key={index} item={item}/>
                    )
                }
            </ul>
            <p>
                <button onClick={props.clearItems}>Clear Items</button>
            </p>
        </div>
    );
}

const TodoItem = (props) => {
    return (
        <li>
            {props.item}
            <button onClick={() => {props.deleteItem(props.item) }}>x</button>
        </li>
    );
}

class Action extends React.Component {
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
                {this.state.error && <p>{this.state.error}</p>}        
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem"/>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));