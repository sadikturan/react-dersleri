"use strict";

var _arguments = arguments;
var user = {
  name: 'sadikturan',
  email: 'info@sadikturan.com',
  city: 'Kocaeli',
  roles: ['admin', 'customer'],
  getRoles: function getRoles() {
    var _this = this;

    this.roles.forEach(function (role) {
      console.log(role);
      console.log(_this.name);
    });
  }
};
user.getRoles();

var addES5 = function addES5() {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
};

var addES6 = function addES6() {
  console.log(_arguments);
};

console.log(addES5(5, 10, 20, 30));
console.log(addES5(5, 10, 20, 30, 40));
addES6();
