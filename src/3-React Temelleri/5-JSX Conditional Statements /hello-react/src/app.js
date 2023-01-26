// JSX - Javascript XML
var root = document.getElementById('root');

var template =  <div>
                    <h1 id="header">Hello World</h1>
                    <div>Lorem, ipsum dolor.</div>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>;

var product = {
    name: 'Samsung S11',
    price: 5000,
    description: 'iyi telefon',
    types: []
}

function getDescription(description) {
    if(description) {
        return <p id="product-desc">description: {description}</p>;
    }
}

var template2 = (
    <div id="product-details">
        <h2 id="product-name">name: {product.name ? product.name:'no name'}</h2>
        {(product.price && product.price>0) && <p>price: {product.price} TL</p> }
        {getDescription(product.description)}
        <p>{product.types.length>0?'there are options':'no options'}</p>
    </div>
);

// ReactDOM
ReactDOM.render(template2, root);
