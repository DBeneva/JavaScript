function printStatistics(n) {
    const numbers = Array.from(Array(Number(n)), (_, i) => i + 1);
    const oneDigitOdd = numbers.filter(x => x < 10 && x % 2 == 1).length;
    const even = numbers.filter(x => x % 2 == 0).length;
    const oddNumsIn7 = numbers.filter(x => x % 10 == 7).length;
    const dividersOf100 = numbers.filter(x => 100 % x == 0).length;

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