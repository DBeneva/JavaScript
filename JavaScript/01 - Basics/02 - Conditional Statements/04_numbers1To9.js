function numToWord(num) {
    if (num == 1) {
        return 'one';
    } else if (num == 2) {
        return 'two';
    } else if (num == 3) {
        return 'three';
    } else if (num == 4) {
        return 'four';
    } else if (num == 5) {
        return 'five';
    } else if (num == 6) {
        return 'six';
    } else if (num == 7) {
        return 'seven';
    } else if (num == 8) {
        return 'eight';
    } else if (num == 9) {
        return 'nine';
    } else {
        return 'number too big';
    }
}

function numToWordArr(num) {
    const numWord = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];

    return numWord[num - 1] ? numWord[num - 1] : 'number too big';
}

console.log(numToWord('1'));

console.log('====================');

console.log(numToWordArr('3'));