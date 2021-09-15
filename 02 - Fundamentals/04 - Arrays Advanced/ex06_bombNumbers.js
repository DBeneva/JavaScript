function bombNumbers(numbers, bombInfo) {
    let bomb = bombInfo[0];
    let bombPower = bombInfo[1];

    while (numbers.includes(bomb)) {
        let bombIndex = numbers.indexOf(bomb);
        let start = Math.max(0, bombIndex - bombPower);
        let end = bombIndex + bombPower + 1;
        let detonated = Math.min(bombPower * 2 + 1, end - start);
        
        numbers.splice(start, detonated);
    }

    console.log(numbers.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);