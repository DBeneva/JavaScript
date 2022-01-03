function printMaxNum(input) {
    let n = Number(input[0]), max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        max = Math.max(Number(input[i]), max);
    }

    console.log(`max = ${max}`);
}

function printMaxNumArray(input) {
    const numbers = input
        .slice(1)
        .map(Number)
        .sort((a, b) => b - a);

    console.log(`max = ${numbers[0]}`);
}

printMaxNum([4, 45, -20, 7, 99]);
console.log('====================');
printMaxNumArray([4, 45, -20, 7, 99]);