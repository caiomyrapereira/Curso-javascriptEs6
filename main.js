class List {
    constructor() {
        this.list = [];
    }
    add(elem) {
        this.list.push(elem);
    }
}

class PeopleList extends List {
    constructor() {
        super();
    }
    addPerson(person) {
        this.add(person);
    }
}

class person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    fullName() {
        return this.name + ' ' + this.lastName;
    }
}

const peopleList = new PeopleList();
const $button = document.querySelector('[data-js="addPerson"]');

$button.addEventListener('click', () => {
    const name = prompt('digite o nome da pessoa?');
    const lastName = prompt('digite o sobrenome da pessoa?');
    const newPerson = new person(name, lastName);

    peopleList.addPerson(newPerson.fullName());
    console.log(peopleList.list);
})