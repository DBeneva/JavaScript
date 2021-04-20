function leftAndRightSum(...input) {
    const num = Number(input[0]);
    let leftSum = 0;
    let rightSum = 0;
    
    for (let i = 1; i <= num; i++) {
        leftSum += Number(input[i]);
    }

    for (let i = num + 1; i <= num * 2; i++) {
        rightSum += Number(input[i]);
    }

    const difference = Math.abs(leftSum - rightSum);

    if (difference == 0) {
        return `Yes, sum = ${leftSum}`;
    } else {
        return `No, diff = ${difference}`;
    }
}

function leftAndRightSumArr(...input) {
    const num = Number(input.shift());
    const leftSum = input.slice(0, num).reduce((acc, curr) => acc + curr, 0);
    const rightSum = input.slice(num, num * 2).reduce((acc, curr) => acc + curr, 0);
    const difference = Math.abs(leftSum - rightSum);
    
    return difference == 0 ? `Yes, sum = ${leftSum}` : `No, diff = ${difference}`;
}

console.log(leftAndRightSum(2, 90, 9, 50, 50));

console.log('====================');

console.log(leftAndRightSumArr(2, 90, 9, 50, 50));