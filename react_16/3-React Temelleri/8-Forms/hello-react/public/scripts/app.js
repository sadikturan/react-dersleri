"use strict";

var root = document.getElementById('root');
var app = {
  title: "Todo Application",
  description: "Lorem, ipsum dolor.",
  items: []
};

function onFormSubmit(event) {
  event.preventDefault();
  var item = event.target.elements.txtItem.value;

  if (item) {
    app.items.push(item);
    event.target.elements.txtItem.value = '';
    render();
  }

  console.log('form submitted');
}

function clearItems() {
  app.items = [];
  render();
}

function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("div", null, app.description, "."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: clearItems
  }, "Clear Items")), /*#__PURE__*/React.createElement("p", null, app.items.length), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtItem"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add Item")));
  ReactDOM.render(template, root);
}

render();
