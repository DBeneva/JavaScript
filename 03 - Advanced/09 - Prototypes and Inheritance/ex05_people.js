function people() {
    class Employee {
        constructor(name, age) {
            if (new.target == Employee) {
                throw new Error('Cannot instantiate directly.');
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        getSalary() {
            return this.salary;
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.')
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return { Employee, Junior, Senior, Manager };
}

result = people();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);

console.log(guy1.hasOwnProperty('name'));
console.log(guy1.hasOwnProperty('age'));
console.log(guy1.hasOwnProperty('salary'));

console.log(guy2.hasOwnProperty('name'));
console.log(guy2.hasOwnProperty('age'));
console.log(guy2.hasOwnProperty('salary'));

console.log(guy3.hasOwnProperty('name'));
console.log(guy3.hasOwnProperty('age'));
console.log(guy3.hasOwnProperty('salary'));
console.log(guy3.hasOwnProperty('dividend'));

guy3.dividend = 500;
guy3.salary = 500;
console.log(guy3.dividend);
console.log(guy3.collectSalary());