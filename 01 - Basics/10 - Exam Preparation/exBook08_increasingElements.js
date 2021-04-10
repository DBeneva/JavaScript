function increasingElements(input) {
    let n = Number(input[0]);
    let increasingNumbers = 0;
    let increasingNumbersMax = 0;
    let oldNumber = 0;
    let currentNumber = 0;

    for (let index = 1; index <= n; index++) {
        currentNumber = Number(input[index]);

        if (currentNumber > oldNumber) {
            increasingNumbers++;
        } else {
            increasingNumbers = 1;
        }

        if (increasingNumbers > increasingNumbersMax) {
            increasingNumbersMax = increasingNumbers;
        }

        oldNumber = currentNumber;
    }

    console.log(increasingNumbersMax);
}

increasingElements(['4', '5', '6', '7', '8']);