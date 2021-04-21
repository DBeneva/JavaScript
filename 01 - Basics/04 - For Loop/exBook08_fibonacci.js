function fibonacci(endPosition) {
    endPosition = Number(endPosition);
    let oldNum1 = 0;
    let oldNum2 = 1;

    for (let position = 0; position <= endPosition; position++) {
        const num = oldNum1 + oldNum2;
        oldNum2 = oldNum1;
        oldNum1 = num;
    }

    return oldNum1;
}

function fibonacciArr(endPosition) {
    const sequence = [1, 1];

    for (let i = 2; i <= endPosition; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }

    return sequence[endPosition];
}

console.log(fibonacci(5));

console.log('====================');

console.log(fibonacciArr(5));