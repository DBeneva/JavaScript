class Employee { constructor(readonly code: number) {} }

const employee = new Employee(10);
console.log(employee.code); // 10
employee.code = 20; // Compiler Error