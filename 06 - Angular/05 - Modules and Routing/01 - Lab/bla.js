"use strict";
class Employee {
    constructor(code) {
        this.code = code;
    }
}
const employee = new Employee(10);
console.log(employee.code); // 10
employee.code = 20; // Compiler Error
