function evenAndOddSubtraction(input) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let number of input) {
        if (number % 2 == 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }

    console.log(sumEven - sumOdd);
}

evenAndOddSubtraction([2,4,6,8,10]);