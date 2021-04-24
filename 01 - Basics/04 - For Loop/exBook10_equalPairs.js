function equalPairs(...input) {
    let n = Number(input[0]);
    let sumPair = 0;
    let equalPairs = 0;
    let maxDifference = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n * 2; i += 2) {
        sumPair = Number(input[i]) + Number(input[i + 1]);
        let sumPreviousPair = Number(input[i - 2]) + Number(input[i - 1]);
        let difference = Math.abs(sumPair - sumPreviousPair);

        if (difference == 0) {
            equalPairs += 1;
        } else if (difference > maxDifference) {
            maxDifference = difference;
        }
    }

    if (equalPairs == n - 1) {
        return `Yes, value=${sumPair}`;
    } else {
        return `No, maxdiff=${maxDifference}`;
    }
}

function equalPairsArr(...input) {
    input = input.map(Number).slice(1);
    const sums = input
        .map((_, i) => i % 2 == 1 ? input[i] + input[i - 1] : '')
        .filter(x => x != '')
        .sort((a, b) => a - b);

    return sums.every(x => x == sums[0]) ? `Yes, value=${sums[0]}` :
        `No, maxdiff=${Math.abs(sums[0] - sums[sums.length - 1])}`;
}

console.log(equalPairs(2, -1, 2, 0, -1));

console.log('====================');

console.log(equalPairsArr(2, -1, 2, 0, -1));