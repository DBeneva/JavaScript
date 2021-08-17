class Person { constructor(public name: string) {} }
function display<T extends Person>(per: T): void { console.log(per.name); }

const person = new Person('Ben');
display(person); // 'Ben'
display({ name: 'Ben' }); // Compiler Error
