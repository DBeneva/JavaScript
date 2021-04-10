function getWord(num) {    
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

function getWordObj(num) {
    const numWord = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    
    return numWord[num] ? numWord[num] : 'number too big';
}

console.log(getWord('1'));

console.log('====================');

console.log(getWordObj('3'));