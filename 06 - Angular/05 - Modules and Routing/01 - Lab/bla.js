"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
function display(per) { console.log(per.name); }
const person = new Person('Ben');
display(person); // 'Ben'
display({ age: 45, name: 'Ben' }); // Compiler Error
