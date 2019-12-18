"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.list = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(elem) {
      this.list.push(elem);
    }
  }]);

  return List;
}();

var PeopleList =
/*#__PURE__*/
function (_List) {
  _inherits(PeopleList, _List);

  function PeopleList() {
    _classCallCheck(this, PeopleList);

    return _possibleConstructorReturn(this, _getPrototypeOf(PeopleList).call(this));
  }

  _createClass(PeopleList, [{
    key: "addPerson",
    value: function addPerson(person) {
      this.add(person);
    }
  }]);

  return PeopleList;
}(List);

var person =
/*#__PURE__*/
function () {
  function person(name, lastName) {
    _classCallCheck(this, person);

    this.name = name;
    this.lastName = lastName;
  }

  _createClass(person, [{
    key: "fullName",
    value: function fullName() {
      return this.name + ' ' + this.lastName;
    }
  }]);

  return person;
}();

var peopleList = new PeopleList();
var $button = document.querySelector('[data-js="addPerson"]');
$button.addEventListener('click', function () {
  var name = prompt('digite o nome da pessoa?');
  var lastName = prompt('digite o sobrenome da pessoa?');
  var newPerson = new person(name, lastName);
  peopleList.addPerson(newPerson.fullName());
  console.log(peopleList.list);
});
