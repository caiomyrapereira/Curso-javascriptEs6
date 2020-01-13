/* 
exercicio 01
*/
(function() {

    'use strict';

    class user {
        constructor(email, password) {
            this.email = email;
            this.password = password;
        }

        isAdmin() {
            return false;
        }
    }


    class admin extends user {
        constructor() {
            super()
        }

        isAdmin() {
            return true;
        }
    }



    const User = new user('email@hotmail.com', '******');
    const Admin = new admin('email@hotmail.com', '******');

    console.log('--Exercicio 01 --');
    console.log(User.isAdmin());
    console.log(Admin.isAdmin());
    console.log('----------------');
})()

/* 
exercicio 2
*/


const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

const names = users.map((user) => user.name);
const maidRocketseat = users.filter((user) => user.company === 'Rocketseat' && user.age > 18);
const maidGoogle = users.find((user) => user.company === 'Google');
const unitedOperation = users.map((user) => {
        user.age *= 2;
        return user;
    })
    .filter((user) => user.age <= 50);

console.log('-- Exercicio 2 --');
console.log(names);
console.log(maidRocketseat);
console.log(maidGoogle);
console.log(unitedOperation);
console.log('-----------------');

/*
exercicio 3
*/
(function(wind) {

    'use strict';

    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.map((item) => item + 10);

    //
    const user = { name: 'Diego', age: 23 };
    const getAge = (user) => user.age;
    const name = "Diego";
    const age = 23;
    const getUser = (nome = 'Diego', idade = 18) => ({ nome, idade });
    const promise = () => new Promise((resolve, reject) => resolve());

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

(function() {

    'use strict';

    const company = {
        name: 'Rocketseat',
        address: {
            city: 'Rio do Sul',
            state: 'SC'
        }
    };
    const { name, address: { city, state } } = company;
    const mostraInfo = ({ name, age }) => {
        return `${name} tem ${age} anos.`;
    }

    console.log('--Exercicio 4--')
    console.log(name);
    console.log(city);
    console.log(state);
    console.log(mostraInfo({ name: 'Diego', age: 23 }))
    console.log('---------------')
})();

/*
 exercicio 5
*/

(function(arr) {

    'use strict';

    const [x, ...y] = arr;
    const user = {
        name: 'Diego',
        age: 23,
        address: {
            city: 'Rio do Sul',
            uf: 'SC',
            countries: 'Brasil',
        }
    };
    const user2 = {...user, name: 'Gabriel' };
    const user3 = {...user, address: { city: 'Lontras' } };

    function sum(...array) {
        return (array).reduce((actual, acuml) => actual + acuml, 0);
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

(function() {
    'use strict';

    const user = 'Diego';
    const age = 23;

    console.log('--Exercicio 6--')
    console.log(`O usuário ${user}  possui  ${age} anos `);
    console.log('---------------')
})();

/*
 exercicio 7
*/

(function() {

    'use strict';

    const name = 'Diego';
    const age = 23;
    const user = {
        name,
        age,
        city: 'Rio do Sul',
    };

    console.log('--Exercicio 7--');
    console.log(user);
    console.log('---------------');

})();