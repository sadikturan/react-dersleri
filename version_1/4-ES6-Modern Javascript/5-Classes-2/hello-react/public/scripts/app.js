"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      return "".concat(text, ", My name is ").concat(this.name, ". ");
    }
  }]);

  return Person;
}();

var Student = /*#__PURE__*/function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, year, studentNumber) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, year);
    _this.studentNumber = studentNumber;
    return _this;
  }

  _createClass(Student, [{
    key: "study",
    value: function study() {
      console.log('I am learning');
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      var str = _get(_getPrototypeOf(Student.prototype), "greeting", this).call(this, text);

      str += "My number is ".concat(this.studentNumber);
      return str;
    }
  }]);

  return Student;
}(Person);

var Teacher = /*#__PURE__*/function (_Person2) {
  _inherits(Teacher, _Person2);

  var _super2 = _createSuper(Teacher);

  function Teacher(name, year, department) {
    var _this2;

    _classCallCheck(this, Teacher);

    _this2 = _super2.call(this, name, year, department);
    _this2.department = department;
    return _this2;
  }

  _createClass(Teacher, [{
    key: "teach",
    value: function teach() {
      console.log('I am teaching math');
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      var str = _get(_getPrototypeOf(Teacher.prototype), "greeting", this).call(this, text);

      str += "My department is ".concat(this.department);
      return str;
    }
  }]);

  return Teacher;
}(Person); // Nesne - Object


var p1 = new Student("Sadık", 1983, 120);
var p2 = new Teacher("Çınar", 2017, 'Math');
var p3 = new Person();
p1.study();
p2.teach();
console.log(p1.greeting('Hello'));
console.log(p2.greeting('Good morning'));
console.log(p3.greeting('Hello'));
console.log(p1.calculateAge());
console.log(p2.calculateAge());
console.log(p3.calculateAge());
console.log(p1);
console.log(p2);
