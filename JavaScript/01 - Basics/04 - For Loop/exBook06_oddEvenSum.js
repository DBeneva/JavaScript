function oddEvenSum(...input) {
    const num = Number(input[0]);
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            sumOdd += Number(input[i]);
        } else {
            sumEven += Number(input[i]);
        }
    }

    const difference = Math.abs(sumOdd - sumEven);

    if (difference == 0) {
        return `Yes, sum = ${sumOdd}`;
    } else {
        return `No, diff = ${difference}`;
    }
}

function oddEvenSumArr(...input) {
    const sumOdd = input.slice(1).filter((_, i) => i % 2 == 1).reduce((acc, curr) => acc + curr, 0);
    const sumEven = input.slice(1).filter((_, i) => i % 2 == 0).reduce((acc, curr) => acc + curr, 0);
    const difference = Math.abs(sumOdd - sumEven);

    return difference == 0 ? `Yes, sum = ${sumOdd}` : `No, diff = ${difference}`;
}

console.log(oddEvenSum(4, 3, 5, 1, -2));

console.log('====================');

console.log(oddEvenSumArr(4, 3, 5, 1, -2));