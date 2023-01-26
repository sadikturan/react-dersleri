"use strict";

// JSX - Javascript XML
var root = document.getElementById('root');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var name = "Samsung S10";
var price = 5000;
var description = "çok iyi bir telefon";
var product = {
  name: "Samsung S11",
  price: 7000,
  description: "çok iyi bir telefon"
};

function formatPrice(p) {
  return p.price + ' TL';
}

var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: ", product.name), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "price: ", formatPrice(product)), /*#__PURE__*/React.createElement("p", {
  id: "product-desc"
}, "description: ", product.description)); // ReactDOM

ReactDOM.render(template2, root);
