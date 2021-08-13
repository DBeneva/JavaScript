class Employee { static code: number = 1; name: string = 'B' }

const employee = new Employee();
//employee.code // Compiler Error
console.log(employee.name);
console.log(Employee.name);
console.log(Employee.code); // 1
