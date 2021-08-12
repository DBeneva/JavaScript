class Person {
    public code!: number;
    name!: string;
    private phone!: number;
    protected address!: string;
}

const emp = new Person();
emp.code = 123;
emp.name = 'Ben';
emp.phone = 123456;
emp.address = '12 A Str.';
console.log(emp);
