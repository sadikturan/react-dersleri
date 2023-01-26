import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'hello react');
ReactDOM.render(template, document.getElementById('root'));