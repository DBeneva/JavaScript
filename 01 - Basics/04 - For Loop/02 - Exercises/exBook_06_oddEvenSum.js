function oddEvenSum(input) {
    const num = Number(input[0]);
    
    const sumOdd = getSum(1);
    const sumEven = getSum(0);
    const difference = Math.abs(sumOdd - sumEven);

    if (difference == 0) {
        console.log(`Yes, sum = ${sumOdd}`);
    } else {
        console.log(`No, diff = ${difference}`);
    }

    function getSum(n) {
        let sum = 0;

        for (let i = 1; i <= num; i++) {
            if (i % 2 == n) sum += Number(input[i]);
        }

        return sum;
    }
}

oddEvenSum([4, 3, 5, 1, -2]);