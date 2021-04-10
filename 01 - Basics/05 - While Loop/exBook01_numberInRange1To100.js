function numberInRange1To100(input) {
    let i = 0;
    let num = Number(input[i]);

    while (num < 1 || num > 100) {
        console.log('Invalid number!');
        num = Number(input[i]);
        i++;
    }

    console.log(`The number is ${num}`);
}

numberInRange1To100([45]);