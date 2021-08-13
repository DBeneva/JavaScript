"use strict";
class Employee {
    constructor() {
        this.namef = 'B';
    }
}
Employee.code = 1;
const employee = new Employee();
//employee.code // Compiler Error
console.log(employee.namef);
console.log(Employee.namef);
console.log(Employee.code); // 1
