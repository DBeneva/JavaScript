function oddEvenSum(...input) {
    let num = Number(input[0]);
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            sumOdd += Number(input[i]);
        } else {
            sumEven += Number(input[i]);
        }
    }

    let difference = Math.abs(sumOdd - sumEven);

    if (difference == 0) {
        console.log(`Yes, sum = ${sumOdd}`);
    } else {
        console.log(`No, diff = ${difference}`);
    }
}

oddEvenSum(4, 3, 5, 1, -2);