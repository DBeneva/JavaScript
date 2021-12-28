function printSumSquares(n) {
    n = Number(n);

    let sum = 0;
    for (i = 1; i <= n; i++) sum += i ** 2;

    console.log(sum);
}

function printSumSquaresArray(n) {
    const output = Array
        .from(Array(Number(n)), (_, i) => i + 1)
        .reduce((acc, curr) => acc + curr ** 2, 0);

    console.log(output);
}

printSumSquares(7);
console.log('====================');
printSumSquaresArray(7);