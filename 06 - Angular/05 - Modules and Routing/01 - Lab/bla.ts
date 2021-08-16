/// <reference path="StringUtility.ts" />

class Employee { static code: number = 1; name: string = 'B' }

const employee = new Employee();
//employee.code // Compiler Error
console.log(employee.name);
//console.log(Employee.name);
console.log(Employee.code); // 1

export let greeting: string = 'Hi TS';

employee.name = StringUtility.toCapital(employee.name);
console.log(employee.name);
