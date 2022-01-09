function enterEvenNumber(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 != 0) {
            console.log('The number is not even.');
        } else {
            console.log(`Even number entered: ${input[i]}`);
            break;
        }
    }
}

function enterEvenNumberArray(input) {
    const output = input
        .slice(0, input.findIndex(x => x % 2 == 0) + 1)
        .map(x => x % 2 == 1 ? 'The number is not even.' : `Even number entered: ${x}`)
        .join('\n');

    console.log(output);
}

enterEvenNumber([45, 7, 9, 68]);
console.log('====================');
enterEvenNumberArray([45, 7, 9, 68]);