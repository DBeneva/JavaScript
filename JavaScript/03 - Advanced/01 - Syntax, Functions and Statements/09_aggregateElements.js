function aggregateElements(input) {

    console.log(input.reduce((a, b) => a + b));
    console.log(input.reduce((a, b) => a + 1 / b, 0));
    console.log(input.reduce((a, b) => a + b, ''));
}

aggregateElements([2, 4, 8, 16]);