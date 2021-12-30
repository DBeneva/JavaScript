function halfSumElement(input) {
    const n = Number(input[0]);

    let sum = 0;
    let max = Number.NEGATIVE_INFINITY;

    for (i = 1; i <= n; i++) {
        const num = Number(input[i]);

        sum += num;
        if (num > max) max = num;
    }

    console.log(
        max == sum / 2
            ? `Yes\nSum = ${sum / 2}`
            : `No\nDiff = ${Math.abs(max - (sum - max))}`
    );
}

halfSumElement([3, 1, 1, 10]);