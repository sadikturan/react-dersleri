"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class - ES5
// var Person = function() {
// }
// Class - ES6
var Person = /*#__PURE__*/function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Guest';
    var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1900;

    _classCallCheck(this, Person);

    this.name = name;
    this.year = year;
    console.log('constructor çalıştı.');
  }

  _createClass(Person, [{
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.year;
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, ", My name is ").concat(this.name, " ");
    }
  }]);

  return Person;
}(); // Nesne - Object


var p1 = new Person("Sadık", 1983);
var p2 = new Person("Çınar", 2017);
var p3 = new Person();
console.log(p1.greeting('Hello'));
console.log(p2.greeting('Good morning'));
console.log(p3.greeting('Hello'));
console.log(p1.calculateAge());
console.log(p2.calculateAge());
console.log(p3.calculateAge());
console.log(p1);
console.log(p2);
