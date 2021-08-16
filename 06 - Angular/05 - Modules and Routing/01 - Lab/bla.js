"use strict";
/// <reference path="StringUtility.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.greeting = void 0;
class Employee {
    constructor() {
        this.name = 'B';
    }
}
Employee.code = 1;
const employee = new Employee();
//employee.code // Compiler Error
console.log(employee.name);
//console.log(Employee.name);
console.log(Employee.code); // 1
exports.greeting = 'Hi TS';
employee.name = StringUtility.toCapital(employee.name);
console.log(employee.name);
