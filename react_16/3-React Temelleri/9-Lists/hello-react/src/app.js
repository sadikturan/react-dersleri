var root = document.getElementById('root');

var app = {
    title: "Todo Application",
    description: "Lorem, ipsum dolor.",
    items: ['item 1','item 2']
};

function onFormSubmit(event) {
    event.preventDefault();

    var item = event.target.elements.txtItem.value;

    if(item) {
        app.items.push(item);
        event.target.elements.txtItem.value='';
        render();
    }

    console.log('form submitted');
}

function clearItems() {
    app.items = [];
    render();
}

function render() {
    var template =  (
        <div>
            <h1>{app.title}</h1>
            <div>{app.description}.</div>
            {
               <ul>
                   {
                       app.items.map((item,index) => {
                         return <li key={index}>{item}</li>
                       })
                   }
                </ul>
            }
            <p>
                <button onClick={clearItems}>Clear Items</button>
            </p>
            <p>{app.items.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="txtItem"/>
                <button type="submit">Add Item</button>
            </form>
        </div>
);

ReactDOM.render(template, root);
}

render();




