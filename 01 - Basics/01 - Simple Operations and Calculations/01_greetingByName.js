function greet(name) {
    return 'Hello, ' + name + '!';
}

function greetInt(name) {
    return `Hello, ${name}!`;
}

function greetObj(name) {
    const greeting = {
        name,
        get line() {
            return `Hello, ${name}!`;
        }
    };

    return greeting.line;
}

console.log(greet('Mark'));

console.log('====================');

console.log(greetInt('John'));

console.log('====================');

console.log(greetObj('Jane'));