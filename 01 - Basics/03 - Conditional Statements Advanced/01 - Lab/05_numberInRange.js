function numberInRange(num) {
    num = Number(num);

    const output = num >= -100 && num <= 100 && num != 0
        ? 'Yes'
        : 'No';

    console.log(output);
}

numberInRange(0);