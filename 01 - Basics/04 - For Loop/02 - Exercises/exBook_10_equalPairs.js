function equalPairs(input) {
    inputParamsToNumbers();
    let minSum = Number.POSITIVE_INFINITY, maxSum = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= input[0] * 2; i += 2) {
        minSum = Math.min(minSum, input[i] + input[i + 1]);
        maxSum = Math.max(maxSum, input[i] + input[i + 1]);
    }

    if (minSum == maxSum) console.log(`Yes, value=${minSum}`);
    else console.log(`No, maxdiff=${maxSum - minSum}`);

    function inputParamsToNumbers() {
        for (let i = 0; i < input.length; i++) {
            input[i] = Number(input[i]);
        }
    }
}

equalPairs([2, 1, 1, 3, 1]);