interface IEmployee {
    name: string,
    code: number
}

const employee = {} as IEmployee;
employee.name = 'John';
console.log(employee);