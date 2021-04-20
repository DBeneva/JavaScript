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
    endPosition = Number(endPosition);
    const sequence = Array.from(Array(endPosition), (_, i) => )
    
    let oldNum1 = 0;
    let oldNum2 = 1;

    for (let position = 0; position <= endPosition; position++) {
        const num = oldNum1 + oldNum2;
        oldNum2 = oldNum1;
        oldNum1 = num;
    }

    return oldNum1;
}

console.log(fibonacci(20));