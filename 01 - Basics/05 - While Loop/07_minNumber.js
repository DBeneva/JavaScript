function minNumber(input) {
    const n = Number(input[0]);
    let min = Number.POSITIVE_INFINITY;
    let i = 1;

    while (i <= n) {
        const currentNumber = Number(input[i]);
        
        if (currentNumber < min) {
            min = currentNumber;
        }

        i++;
    }

    return min;
}

function minNumberArr(input) {
    return input.slice(1).sort((a, b) => a - b)[0];
}

console.log(minNumber([2, 100, 99]));

console.log('====================');

console.log(minNumberArr([2, 100, 99]));