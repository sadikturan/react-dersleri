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

var name = "Samsung S10";
var price = 5000;
var description = "çok iyi bir telefon"

var product = {
    name : "Samsung S11",
    price : 7000,
    description : "çok iyi bir telefon"
}

function formatPrice(p) {
    return p.price + ' TL';
}

var template2 = (
    <div id="product-details">
        <h2 id="product-name">name: {product.name}</h2>
        <p id="product-price">price: {formatPrice(product)}</p>
        <p id="product-desc">description: {product.description}</p>
    </div>
);

// ReactDOM
ReactDOM.render(template2, root);
