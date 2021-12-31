function equalPairs(input) {
    input = input.map(Number).slice(1, Number(input[0]) * 2 + 1);
    const sums = input
        .map((_, i) => i % 2 == 1 ? input[i] + input[i - 1] : '')
        .filter(x => x !== '')
        .sort((a, b) => a - b);

    console.log(
        sums.every(x => x == sums[0])
            ? `Yes, value=${sums[0]}`
            : `No, maxdiff=${Math.abs(sums[0] - sums[sums.length - 1])}`
    );
}

equalPairs([2, 1, 2, 2, 2]);