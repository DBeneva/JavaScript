function lotaryStatistics(n) {
    n = Number(n);
    
    let oneDigitOddNumbers = 0;
    let evenNumbers = 0;
    let oddNumbersEndingIn7 = 0;
    let dividersOf100 = 0;

    for (let i = 0; i < n; i++) {
        if (i < 10 && i % 2 == 1) {
            oneDigitOddNumbers += 1;
        }

        if (i % 2 == 0) {
            evenNumbers +=1;
        }
        
        if (i % 10 == 7) {
            oddNumbersEndingIn7 += 1;
        }
        
        if (100 % i == 0) {
            dividersOf100 += 1;
        }
    }
    
    console.log((oneDigitOddNumbers * 100 / n).toFixed(2) + '%');
    console.log((evenNumbers * 100 / n).toFixed(2) + '%');
    console.log((oddNumbersEndingIn7 * 100 / n).toFixed(2) + '%');
    console.log((dividersOf100 * 100 / n).toFixed(2) + '%');
}

lotaryStatistics(49);