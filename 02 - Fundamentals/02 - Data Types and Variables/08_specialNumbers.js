function specialNumbers(n) {
    n = n.toString();

    for (let currentNumber = 1; currentNumber <= Number(n); currentNumber++) {
        let sumOfDigits = 0;
        let currentDigit = currentNumber;
        
        while (currentDigit > 0) {
            sumOfDigits += currentDigit % 10;
            currentDigit = Math.trunc(currentDigit / 10);
        }
        
        let special = sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11 ? 'True' : 'False';
        
        console.log(`${currentNumber} -> ${special}`);
    }
}

specialNumbers(15);