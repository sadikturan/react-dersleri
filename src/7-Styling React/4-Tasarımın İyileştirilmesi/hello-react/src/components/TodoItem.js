import React from 'react';

const TodoItem = (props) => {
    return (
        <li className="list-group-item">
            {props.item}
            <button className="btn btn-danger btn-sm float-right" onClick={() => {props.deleteItem(props.item) }}>x</button>
        </li>
    );
}

export default TodoItem;