import React from 'react';
import Header from './Header';
import Action from './Action';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {

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
            <div className="container my-5">
                <div className="card">
                    <div className="card-header">
                        <Header title={app.title} description={app.description} />
                    </div>
                    <div className="card-body">
                        <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems} />
                    </div>
                    <div className="card-footer">
                        <Action addItem = {this.addItem}/>
                    </div>
                </div>
            </div>
        );
    }
}
