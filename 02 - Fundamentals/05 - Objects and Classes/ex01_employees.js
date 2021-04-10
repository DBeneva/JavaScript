function employees(input) {
    class Person {
        constructor(name) {
            this.name = name;
            this.number = name.length;
        }

        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`;
        }
    }

    return input.map(x => new Person(x).print()).join('\n');
}

console.log(employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]));