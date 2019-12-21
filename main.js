// Rest

const person = {
    name: 'caio',
    age: 22,
    sex: 'male'
}

const { name, ...rest } = person;

console.log(name)
console.log(rest)

//Spread

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]
const person2 = {...person, name: 'daniel' }

console.log(arr3)
console.log(person2)