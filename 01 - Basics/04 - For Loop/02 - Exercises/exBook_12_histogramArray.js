function histogramArr(numbers) {
    numbers.map(Number);

    const n = numbers.shift();
    const under200 = numbers.filter(x => x < 200).length / n * 100;
    const under400 = numbers.filter(x => x >= 200 && x < 400).length / n * 100;
    const under600 = numbers.filter(x => x >= 400 && x < 600).length / n * 100;
    const under800 = numbers.filter(x => x >= 600 && x < 800).length / n * 100;
    const above800 = numbers.filter(x => x >= 800).length / n * 100;

    console.log(
        `${under200.toFixed(2)}%\n` +
        `${under400.toFixed(2)}%\n` +
        `${under600.toFixed(2)}%\n` +
        `${under800.toFixed(2)}%\n` +
        `${above800.toFixed(2)}%`
    );
}

histogramArr([3, 1, 2, 999]);