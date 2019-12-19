"use strict";

var user = {
  name: 'caio',
  age: 22,
  address: {
    city: 'são paulo',
    state: 'sp'
  }
};
var name = user.name,
    age = user.age,
    city = user.address.city;
console.log("nome:".concat(name, ", idade:").concat(age, ", cidade:").concat(city, " "));
