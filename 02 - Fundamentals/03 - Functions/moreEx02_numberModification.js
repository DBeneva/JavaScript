function numberModification(num) {
    let average = findAverageDigit(num);
    
    while (average <= 5) {
        num += '9';
        num = Number(num);
        average = findAverageDigit(num);
    }

    console.log(num);

    function findAverageDigit(number) {
        let sum = 0;
        let digits = number.toString().length;

        for (let i = 0; i < digits; i++) {
            sum += Number(number.toString()[i]);
        }

        return sum / digits;
    }
}

numberModification(5835);