function sumOfSeries(n) {
    n = Number(n);
    let sum = 0;

    for (i = 1; i <= n; i++) {
        sum += i * i;
    }

    return sum;
}

function sumOfSeriesArr(n) {
    return Array
        .from(Array(Number(n)), (_, i) => i + 1)
        .reduce((acc, curr) => acc + curr ** 2, 0);
}

console.log(sumOfSeries(7));

console.log('====================');

console.log(sumOfSeriesArr(7));