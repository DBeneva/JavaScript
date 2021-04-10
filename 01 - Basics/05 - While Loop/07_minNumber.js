function minNumber(input) {
    let n = Number(input[0]);
    let min = Number.POSITIVE_INFINITY;
    let i = 1;

    while (i <= n) {
        let currentNumber = Number(input[i]);
        
        if (currentNumber < min) {
            min = currentNumber;
        }

        i++;
    }

    console.log(min);
}

minNumber([2, 100, 99]);