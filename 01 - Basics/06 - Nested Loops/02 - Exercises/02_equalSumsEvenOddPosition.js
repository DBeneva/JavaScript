function equalSumsEvenOddPosition(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let output = '';

    for (let i = num1; i <= num2; i++) {
        let currentNumberString = '' + i;
        let oddSum = 0;
        let evenSum = 0;
        
        for (let j = 0; j < currentNumberString.length; j++) {
            if (j % 2 == 0) {
                evenSum += Number(currentNumberString[j]);
            } else {
                oddSum += Number(currentNumberString[j]);
            }
        }

        if (oddSum == evenSum) {
            output += i + ' ';
        }
    }

    console.log(output);
}

equalSumsEvenOddPosition(['100000', '100050']);