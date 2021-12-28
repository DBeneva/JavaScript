function oddEvenSum(input) {
    const sumOdd = getSum(1);
    const sumEven = getSum(0);
    const difference = Math.abs(sumOdd - sumEven);

    console.log(
        difference == 0
            ? `Yes, sum = ${sumOdd}`
            : `No, diff = ${difference}`
    );

    function getSum(n) {
        return input
            .slice(1)
            .map(Number)
            .filter((_, i) => i % 2 == n)
            .reduce((acc, curr) => acc + curr, 0);
    }
}

oddEvenSum([4, 3, 5, 1, -2]);