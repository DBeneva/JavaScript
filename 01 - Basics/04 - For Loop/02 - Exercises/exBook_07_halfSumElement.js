function halfSumElement(input) {
    const n = Number(input[0]);
    let sum = 0, max = Number.NEGATIVE_INFINITY;

    for (i = 1; i <= n; i++) {
        sum += Number(input[i]);
        max = Math.max(Number(input[i]), max);
    }

    console.log(
        max == sum / 2
            ? `Yes\nSum = ${sum / 2}`
            : `No\nDiff = ${Math.abs(max - (sum - max))}`
    );
}

halfSumElement([3, 1, 1, 10]);