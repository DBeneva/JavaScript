function maxNumber(input) {
    let n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;
    let i = 1;

    while (i <= n) {
        let currentNumber = Number(input[i]);
        
        if (currentNumber > max) {
            max = currentNumber;
        }

        i++;
    }

    console.log(max);
}

maxNumber([2, 100, 99]);