function leftRightSum(input) {
    const num = Number(input.shift());
    
    const leftSum = getSum(0, num);
    const rightSum = getSum(num, num * 2);
    const difference = Math.abs(leftSum - rightSum);
    const output = difference == 0
            ? `Yes, sum = ${leftSum}`
            : `No, diff = ${difference}`;
    
    console.log(output);

    function getSum(start, end) {
        return input
            .slice(start, end)
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0);
    }
}

leftRightSum([2, 90, 9, 50, 50]);