function sumsStep3(input) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let index = 1; index < input.length; index++) {
        let currentNumber = Number(input[index]);
        
        if (index % 3 == 1) {
            sum1 += currentNumber;
        } else if (index % 3 == 2) {
            sum2 += currentNumber;
        } else if (index % 3 == 0) {
            sum3 += currentNumber;
        }
    }

    console.log(`sum1 = ${sum1}`);
    console.log(`sum2 = ${sum2}`);
    console.log(`sum3 = ${sum3}`);
}

sumsStep3(['5', '3', '5', '2', '7', '8']);