function myF() {
    const foo = { name: 'Tom', age: 30, nervous: false };
    const bar = { name: 'Dick', age: 40, nervous: false };
    const baz = { name: 'Harry', age: 50, nervous: true };
    
    console.log('%c My Friends', 'color: orange; font-weight: bold;');
    console.table({foo, bar, baz});
    const day = 'fsdf';
    console.log([foo, bar, baz]);
}

myF();