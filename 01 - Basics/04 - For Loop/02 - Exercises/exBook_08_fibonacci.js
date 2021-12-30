function fibonacci(endPosition) {
    endPosition = Number(endPosition);
    let oldNum1 = 0;
    let oldNum2 = 1;

    for (let position = 0; position <= endPosition; position++) {
        const num = oldNum1 + oldNum2;
        oldNum2 = oldNum1;
        oldNum1 = num;
    }

    console.log(oldNum1);
}

function fibonacciArr(endPosition) {
    const sequence = Array.from(Array(endPosition + 1));
    sequence.forEach((_, i) => {
        i > 1
            ? sequence[i] = (sequence[i - 1] + sequence[i - 2])
            : sequence[i] = 1
    });
    
    console.log(sequence[endPosition]);
}

fibonacci(5);
console.log('====================');
fibonacciArr(5);