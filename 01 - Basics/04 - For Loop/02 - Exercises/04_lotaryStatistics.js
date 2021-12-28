function printStatistics(n) {
    n = Number(n);

    let oneDigitOdd = 0;
    let even = 0;
    let oddNumsIn7 = 0;
    let dividersOf100 = 0;

    for (let i = 1; i <= n; i++) {
        if (i < 10 && i % 2 == 1) oneDigitOdd++;
        else if (i % 2 == 0) even++;
        if (i % 10 == 7) oddNumsIn7++;
        if (100 % i == 0) dividersOf100++;
    }

    const output = getPercentage(oneDigitOdd) +
        getPercentage(even) +
        getPercentage(oddNumsIn7) +
        getPercentage(dividersOf100);

    console.log(output);

    function getPercentage(num) {
        return `${(num * 100 / n).toFixed(2)}%\n`;
    }
}

printStatistics(49);