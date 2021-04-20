function latinLetters() {
    let result = '';

    for (let i = 97; i <= 122; i++) {
        result += String.fromCharCode(i) + '\n';
    }

    return result.trim();
}

function latinLettersArr() {
    return Array
        .from(Array(26), (_, i) => String.fromCharCode(i + 97))
        .join('\n');
}

console.log(latinLetters());

console.log('====================');

console.log(latinLettersArr());