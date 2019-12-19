const user = {
    name: 'caio',
    age: 22,
    address: {
        city: 'são paulo',
        state: 'sp'
    }
};

const { name, age, address: { city } } = user;

console.log(`nome:${name}, idade:${age}, cidade:${city} `);