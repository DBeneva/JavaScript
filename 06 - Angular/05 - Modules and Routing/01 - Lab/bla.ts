interface IEmployee { name: string; }

const employee: Readonly<IEmployee> = { name: 'John' };
employee.name // 'John'
employee.name = 'Ben'; // Compiler Error
