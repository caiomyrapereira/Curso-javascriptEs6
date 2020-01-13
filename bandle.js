"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 
exercicio 01
*/
(function () {
  'use strict';

  var user =
  /*#__PURE__*/
  function () {
    function user(email, password) {
      _classCallCheck(this, user);

      this.email = email;
      this.password = password;
    }

    _createClass(user, [{
      key: "isAdmin",
      value: function isAdmin() {
        return false;
      }
    }]);

    return user;
  }();

  var admin =
  /*#__PURE__*/
  function (_user) {
    _inherits(admin, _user);

    function admin() {
      _classCallCheck(this, admin);

      return _possibleConstructorReturn(this, _getPrototypeOf(admin).call(this));
    }

    _createClass(admin, [{
      key: "isAdmin",
      value: function isAdmin() {
        return true;
      }
    }]);

    return admin;
  }(user);

  var User = new user('email@hotmail.com', '******');
  var Admin = new admin('email@hotmail.com', '******');
  console.log('--Exercicio 01 --');
  console.log(User.isAdmin());
  console.log(Admin.isAdmin());
  console.log('----------------');
})();
/* 
exercicio 2
*/


var users = [{
  name: 'Diego',
  age: 23,
  company: 'Rocketseat'
}, {
  name: 'Gabriel',
  age: 15,
  company: 'Rocketseat'
}, {
  name: 'Lucas',
  age: 30,
  company: 'Facebook'
}];
var names = users.map(function (user) {
  return user.name;
});
var maidRocketseat = users.filter(function (user) {
  return user.company === 'Rocketseat' && user.age > 18;
});
var maidGoogle = users.find(function (user) {
  return user.company === 'Google';
});
var unitedOperation = users.map(function (user) {
  user.age *= 2;
  return user;
}).filter(function (user) {
  return user.age <= 50;
});
console.log('-- Exercicio 2 --');
console.log(names);
console.log(maidRocketseat);
console.log(maidGoogle);
console.log(unitedOperation);
console.log('-----------------');
/*
exercicio 3
*/

(function (wind) {
  'use strict';

  var arr = [1, 2, 3, 4, 5];
  var newArr = arr.map(function (item) {
    return item + 10;
  }); //

  var user = {
    name: 'Diego',
    age: 23
  };

  var getAge = function getAge(user) {
    return user.age;
  };

  var name = "Diego";
  var age = 23;

  var getUser = function getUser() {
    var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
    var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
    return {
      nome: nome,
      idade: idade
    };
  };

  var promise = function promise() {
    return new Promise(function (resolve, reject) {
      return resolve();
    });
  };

  console.log('--Exercicio 3--');
  console.log(newArr);
  console.log(getAge(user));
  console.log(getUser(name, age));
  console.log(getUser(name));
  console.log(promise());
  console.log('---------------');
  wind.arr = arr;
})(window);
/*
 exercicio 4 
*/


(function () {
  'use strict';

  var company = {
    name: 'Rocketseat',
    address: {
      city: 'Rio do Sul',
      state: 'SC'
    }
  };
  var name = company.name,
      _company$address = company.address,
      city = _company$address.city,
      state = _company$address.state;

  var mostraInfo = function mostraInfo(_ref) {
    var name = _ref.name,
        age = _ref.age;
    return "".concat(name, " tem ").concat(age, " anos.");
  };

  console.log('--Exercicio 4--');
  console.log(name);
  console.log(city);
  console.log(state);
  console.log(mostraInfo({
    name: 'Diego',
    age: 23
  }));
  console.log('---------------');
})();
/*
 exercicio 5
*/


(function (arr) {
  'use strict';

  var _arr = _toArray(arr),
      x = _arr[0],
      y = _arr.slice(1);

  var user = {
    name: 'Diego',
    age: 23,
    address: {
      city: 'Rio do Sul',
      uf: 'SC',
      countries: 'Brasil'
    }
  };

  var user2 = _objectSpread({}, user, {
    name: 'Gabriel'
  });

  var user3 = _objectSpread({}, user, {
    address: {
      city: 'Lontras'
    }
  });

  function sum() {
    for (var _len = arguments.length, array = new Array(_len), _key = 0; _key < _len; _key++) {
      array[_key] = arguments[_key];
    }

    return array.reduce(function (actual, acuml) {
      return actual + acuml;
    }, 0);
  }

  console.log('--Exercicio 5--');
  console.log(x);
  console.log(y);
  console.log(sum(1, 2, 3, 4, 5, 6));
  console.log(sum(1, 2)); // 3

  console.log(user2);
  console.log(user3);
  console.log('---------------');
})(window.arr);
/*
 exercicio 6
*/


(function () {
  'use strict';

  var user = 'Diego';
  var age = 23;
  console.log('--Exercicio 6--');
  console.log("O usu\xE1rio ".concat(user, "  possui  ").concat(age, " anos "));
  console.log('---------------');
})();
/*
 exercicio 7
*/


(function () {
  'use strict';

  var name = 'Diego';
  var age = 23;
  var user = {
    name: name,
    age: age,
    city: 'Rio do Sul'
  };
  console.log('--Exercicio 7--');
  console.log(user);
  console.log('---------------');
})();
