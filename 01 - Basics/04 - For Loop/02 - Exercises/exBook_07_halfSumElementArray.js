function halfSumElement(input) {
    const numbers = input.slice(1).map(Number);
    const max = numbers.sort((a, b) => b - a)[0];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const output = max == sum / 2
        ? `Yes\nSum = ${sum / 2}`
        : `No\nDiff = ${Math.abs(max - (sum - max))}`;

    console.log(output);
}

halfSumElement([3, 1, 1, 10]);