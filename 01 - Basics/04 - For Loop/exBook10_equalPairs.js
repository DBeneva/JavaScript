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
        console.log(`Yes, value=${sumPair}`);
    } else {
        console.log(`No, maxdiff=${maxDifference}`);
    }
}

equalPairs(2, -1, 2, 0, -1)