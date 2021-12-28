function printLetters() {
    for (let i = 97; i <= 122; i++) {
        console.log(String.fromCharCode(i));
    }
}

function printLettersArray() {
    const output = Array
        .from(Array(26), (_, i) => String.fromCharCode(i + 97))
        .join('\n');

    console.log(output);
}

printLetters();
console.log('====================');
printLettersArray();