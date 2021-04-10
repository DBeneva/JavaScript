function printNthElement(input) {
    let n = Number(input[input.length - 1]);
    let outputLine = '';

    for (let i = 0; i < input.length - 1; i += n) {
        outputLine += input[i] + ' ';
    }
    
    console.log(outputLine);
}

printNthElement(['1', '2', '3', '4', '5', '6']);