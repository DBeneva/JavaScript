function numbers1To9(num) {    
    if (num == 1) {
        console.log('one');
    } else if (num == 2) {
        console.log('two');
    } else if (num == 3) {
        console.log('three');
    } else if (num == 4) {
        console.log('four');
    } else if (num == 5) {
        console.log('five');
    } else if (num == 6) {
        console.log('six');
    } else if (num == 7) {
        console.log('seven');
    } else if (num == 8) {
        console.log('eight');
    } else if (num == 9) {
        console.log('nine');
    } else {
        console.log('number too big');
    }
}

function numbers1To9Obj(num) {
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
    
    console.log(numWord[num] ? numWord[num] : 'number too big');
}

numbers1To9('1');

console.log('====================');

numbers1To9Obj('3');