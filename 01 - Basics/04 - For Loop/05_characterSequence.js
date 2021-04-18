function characterSequence(input) {
    let result = '';
    
    for (let i = 0; i < input.length; i++) {
        result += input[i] + '\n';
    }

    return result.trim();
}

function characterSequenceArr(input) {
    return input.split('').join('\n');
}

console.log(characterSequence('ice cream'));

console.log('====================');

console.log(characterSequenceArr('ice cream'));