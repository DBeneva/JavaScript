function numberInRange1To100(input) {
    let num = 0;

    for (let i = 0; num < 1 || num > 100; i++) {
        num = Number(input[i]);
        console.log('Invalid number!');
    }

    console.log(`The number is ${num}`);
}

numberInRange1To100([45]);