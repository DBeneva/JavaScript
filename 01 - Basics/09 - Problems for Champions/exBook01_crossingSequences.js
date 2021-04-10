function crossingSequences(input) {
    let tribonacci1 = Number(input[0]);
    let tribonacci2 = Number(input[1]);
    let tribonacci3 = Number(input[2]);
    let tribonacciCurrent = tribonacci3;
    let spiralCurrent = Number(input[3]);
    let spiralStep = Number(input[4]);
    let multiplicator = 1;
    let isFound = false;
    let i = 0;

    if (tribonacci1 == spiralCurrent) {
        console.log(tribonacci1);
        isFound = true;
    } else if (tribonacci2 == spiralCurrent) {
        console.log(tribonacci2);
        isFound = true;
    }

    while (tribonacciCurrent <= 1000000 && spiralCurrent <= 1000000) {
        if (isFound) {
            break;
        }

        if (tribonacciCurrent == spiralCurrent) {
            console.log(tribonacciCurrent);
            isFound = true;
            break;
        } else if (tribonacciCurrent < spiralCurrent) {
            tribonacciCurrent = tribonacci1 + tribonacci2 + tribonacci3;
            tribonacci1 = tribonacci2;
            tribonacci2 = tribonacci3;
            tribonacci3 = tribonacciCurrent;
        } else if (tribonacciCurrent > spiralCurrent) {
            if (i % 2 == 0 && i != 0) {
                multiplicator++;
            }
            spiralCurrent += spiralStep * multiplicator;
            i++;
        }
    }

    if (!isFound) {
        console.log('No');
    }
}

crossingSequences(['40', '99', '100', '99', '2']);