function commandProcessor() {
    let string = '';

    return {
        append: (strToAppend) => string += strToAppend,
        removeStart: (n) => string = string.slice(n),
        removeEnd: (n) => string = string.slice(0, -n),
        print: () => console.log(string)
    }
}

let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
