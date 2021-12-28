function printEvenOdd(num) {
    if (num % 2 == 0) console.log('even');
    else console.log('odd');
}

function printEvenOddTernary(num) {
    console.log(num % 2 == 0 ? 'even' : 'odd');
}

printEvenOdd('68');
console.log('====================');
printEvenOddTernary('69');