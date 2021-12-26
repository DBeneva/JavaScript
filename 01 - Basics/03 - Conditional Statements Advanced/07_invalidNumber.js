function printInvalid(num) {
    num = Number(num);

    if ((num < 100 && num != 0) || num > 200) {
        console.log('invalid');
    }
}

printInvalid('0');