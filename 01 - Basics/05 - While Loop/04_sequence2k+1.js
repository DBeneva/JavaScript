function sequence(n) {
    n = Number(n);
    let sequenceNumber = 1;
    let output = '';

    while (sequenceNumber <= n) {
        output += sequenceNumber + '\n';
        sequenceNumber = sequenceNumber * 2 + 1;
    }

    return output.trim();
}

function sequenceArr(n) {
    const numbers = Array.from(Array(n).fill(1));    
    numbers.forEach((x, i) => (i > 0 && numbers[i - 1] * 2 + 1 <= n) ? numbers[i] = numbers[i - 1] * 2 + 1 : numbers[i] = 1);
    return numbers.slice(0, numbers.indexOf(1, 1)).join('\n');
}

console.log(sequence(31));

console.log('====================');

console.log(sequenceArr(31));