function processOddPositions(array) {
    console.log(array
        .filter((x, i, a) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);