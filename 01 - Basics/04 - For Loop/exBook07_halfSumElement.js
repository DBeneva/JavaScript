function halfSumElement(...input) {
    let n = Number(input[0]);
    let sum = 0;
    let max = Number.NEGATIVE_INFINITY;

    for (i = 1; i <= n; i++) {
        const num = Number(input[i]);
        sum += num;

        if (num > max) {
            max = num;
        }
    }

    if (max == sum / 2) {
        return `Yes\nSum = ${sum / 2}`;
    } else {
        return `No\nDiff = ${Math.abs(max - (sum - max))}`;
    }
}

function halfSumElementArr(...input) {
    const numbers = input.slice(1).map(Number);
    const max = numbers.sort((a, b) => b - a)[0];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    return max == sum / 2 ? `Yes\nSum = ${sum / 2}` :
        `No\nDiff = ${Math.abs(max - (sum - max))}`;
}

console.log(halfSumElement(3, 1, 1, 10));

console.log('====================');

console.log(halfSumElementArr(3, 1, 1, 10));