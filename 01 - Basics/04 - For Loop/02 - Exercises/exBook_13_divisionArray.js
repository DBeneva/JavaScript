function divisionArr(numbers) {
    numbers.map(Number);

    const n = numbers.shift();
    const divisibleBy2 = numbers.filter(x => x % 2 == 0).length / n * 100;
    const divisibleBy3 = numbers.filter(x => x % 3 == 0).length / n * 100;
    const divisibleBy4 = numbers.filter(x => x % 4 == 0).length / n * 100;

    console.log(
        `${divisibleBy2.toFixed(2)}%\n` +
        `${divisibleBy3.toFixed(2)}%\n` +
        `${divisibleBy4.toFixed(2)}%`
    );
}

divisionArr([3, 10, 13, 12]);