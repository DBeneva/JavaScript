function lotaryStatistics(n) {
    n = Number(n);

    let oneDigitOddNumbers = 0;
    let evenNumbers = 0;
    let oddNumbersEndingIn7 = 0;
    let dividersOf100 = 0;
    let result = '';

    for (let i = 1; i <= n; i++) {
        if (i < 10 && i % 2 == 1) {
            oneDigitOddNumbers++;
        }

        if (i % 2 == 0) {
            evenNumbers++;
        }

        if (i % 10 == 7) {
            oddNumbersEndingIn7++;
        }

        if (100 % i == 0) {
            dividersOf100++;
        }
    }

    result += `${(oneDigitOddNumbers * 100 / n).toFixed(2)}%\n`;
    result += `${(evenNumbers * 100 / n).toFixed(2)}%\n`;
    result += `${(oddNumbersEndingIn7 * 100 / n).toFixed(2)}%\n`;
    result += `${(dividersOf100 * 100 / n).toFixed(2)}%`;

    return result;
}

function lotaryStatisticsArr(n) {
    const numbers = Array.from(Array(Number(n)), (_, i) => i + 1);
    const oneDigitOddNumbers = numbers.filter(x => x < 10 && x % 2 == 1).length;
    const evenNumbers = numbers.filter(x => x % 2 == 0).length;
    const oddNumbersEndingIn7 = numbers.filter(x => x % 10 == 7).length;
    const dividersOf100 = numbers.filter(x => 100 % x == 0).length;

    return `${(oneDigitOddNumbers * 100 / n).toFixed(2)}%
${(evenNumbers * 100 / n).toFixed(2)}%
${(oddNumbersEndingIn7 * 100 / n).toFixed(2)}%
${(dividersOf100 * 100 / n).toFixed(2)}%`;
}

console.log(lotaryStatistics(49));

console.log('====================');

console.log(lotaryStatisticsArr(49));