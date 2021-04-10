function processOddNumbers(input) {
    let result = input.filter((v, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse();
    
    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);