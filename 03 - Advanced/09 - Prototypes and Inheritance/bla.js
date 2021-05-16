function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function () {
    return `${this.firstName} says hi`;
};

class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }

    collectSalary() {
        console.log(`${this.firstName} collected ${this.salary}`);
    }
}

const man = new Employee('John', 'Smith', 60000)

man.collectSalary();
man.greet();

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const rect1 = new Rectangle(2, 2);

Rectangle.prototype.calcArea = function() {
    return this.height * this.width;
};

console.log(rect1.calcArea());
const rect2 = new Rectangle(4, 2);
console.log(rect2.calcArea());