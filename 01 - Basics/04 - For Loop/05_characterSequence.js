function printCharacters([input]) {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}

function printCharactersArray([input]) {
    const output = input.split('').join('\n');
    
    console.log(output);
}

printCharacters(['ice cream']);
console.log('====================');
printCharactersArray(['ice cream']);