function printMaxNum(input) {
    const n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        const num = Number(input[i]);
        if (num > max) max = num;
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