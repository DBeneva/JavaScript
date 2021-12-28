function leftRightSum(input) {
    const num = Number(input[0]);
    
    const leftSum = getSum(1, num);
    const rightSum = getSum(num + 1, num * 2);
    const difference = Math.abs(leftSum - rightSum);
    const output = difference == 0
            ? `Yes, sum = ${leftSum}`
            : `No, diff = ${difference}`;
    
    console.log(output);

    function getSum(start, end) {
        let sum = 0;

        for (let i = start; i <= end; i++) {
            sum += Number(input[i]);
        }

        return sum;
    }
}

leftRightSum([2, 90, 9, 50, 50]);