function printSumDigits(n) {
    let sum = 0;

    do {
        sum += n % 10;
        n = Math.floor(n / 10);    
    } while (n > 0);

    console.log(sum);
}

function printSumDigitsArray(n) {
    const sum = n.toString().split('').reduce((a, c) => a + Number(c), 0);
    console.log(sum);
}

printSumDigits(158);
console.log('====================');
printSumDigitsArray(159);