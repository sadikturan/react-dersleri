// class, stateless function component
// state, lifecycle

// 16.8: function component + hook => stateful function component

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             text: ''
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tıkladınız.</p>
//                 <button onClick={()=> this.setState({count: this.state.count + 1})}>+1</button>
//             </div>
//         )
//     }
// }

const App = (props) => {
    const [count,setCount] = useState(props.count);
    const [text,setText] = useState(props.text);

    return ( 
        <div>
            <p>Butona {count} kez tıkladınız.</p>
            <p>girilen text: {text }</p>
            <button onClick={()=> setCount(count+1)}>+1</button>
            <button onClick={()=> setCount(count-1)}>-1</button>
            <button onClick={()=> setCount(props.count)}>reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div> 
    )
}

App.defaultProps = {
    count: 5,
    text: 'ss'
}

ReactDOM.render(<App count={7}/>, document.getElementById('root'));
