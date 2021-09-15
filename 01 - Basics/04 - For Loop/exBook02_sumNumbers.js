function sumNumbers(...input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }

    return sum;
}

function sumNumbersArr(...input) {
    return input.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumNumbers(10, 3, 45));

console.log('====================');

console.log(sumNumbersArr(10, 3, 45));