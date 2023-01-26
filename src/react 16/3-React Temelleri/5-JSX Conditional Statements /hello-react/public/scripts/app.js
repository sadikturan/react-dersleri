"use strict";

// JSX - Javascript XML
var root = document.getElementById('root');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var product = {
  name: 'Samsung S11',
  price: 5000,
  description: 'iyi telefon',
  types: []
};

function getDescription(description) {
  if (description) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-desc"
    }, "description: ", description);
  }
}

var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: ", product.name ? product.name : 'no name'), product.price && product.price > 0 && /*#__PURE__*/React.createElement("p", null, "price: ", product.price, " TL"), getDescription(product.description), /*#__PURE__*/React.createElement("p", null, product.types.length > 0 ? 'there are options' : 'no options')); // ReactDOM

ReactDOM.render(template2, root);
