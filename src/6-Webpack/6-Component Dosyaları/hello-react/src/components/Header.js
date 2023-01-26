import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
        </div>
    ); 
}

export default Header;