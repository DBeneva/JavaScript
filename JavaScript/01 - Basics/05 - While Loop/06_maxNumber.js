function maxNumber(input) {
    const n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;
    let i = 1;

    while (i <= n) {
        let currentNumber = Number(input[i]);
        
        if (currentNumber > max) {
            max = currentNumber;
        }

        i++;
    }

    return max;
}

function maxNumberArr(input) {
    return input.slice(1).sort((a, b) => b - a)[0];
}

console.log(maxNumber([2, 100, 99]));

console.log('====================');

console.log(maxNumberArr([2, 100, 99]));