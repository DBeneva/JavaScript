function oddAndEvenSum(number) {

    let sumOddDigits = findSumOfOddDigits(number);
    let sumEvenDigits = findSumOfEvenDigits(number);
    console.log(`Odd sum = ${sumOddDigits}, Even sum = ${sumEvenDigits}`);

    function findSumOfOddDigits(number) {
        number = number.toString().split('');
        let sumOddDigits = 0;

        for (let i = 0; i < number.length; i++) {
            let digit = Number(number[i]);
            
            if (digit % 2 == 1) {
                sumOddDigits += digit;
            }
        }

        return sumOddDigits;
    }

    function findSumOfEvenDigits(number) {
        let sumEvenDigits = 0;

        for (let i = 0; i < number.toString().length; i++) {
            let digit = Number(number.toString()[i]);
            
            if (digit % 2 == 0) {
                sumEvenDigits += digit;
            }
        }

        return sumEvenDigits;
    }
}

oddAndEvenSum(3495892137259234);