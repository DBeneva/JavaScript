function leftAndRightSum(...input) {
    let num = Number(input[0]);
    let leftSum = 0;
    let rightSum = 0;
    
    for (let i = 1; i <= num; i++) {
        leftSum += Number(input[i]);
    }

    for (let i = num + 1; i <= num * 2; i++) {
        rightSum += Number(input[i]);
    }

    let difference = Math.abs(leftSum - rightSum);

    if (difference == 0) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${difference}`);
    }
}

leftAndRightSum(2, 90, 9, 50, 50);