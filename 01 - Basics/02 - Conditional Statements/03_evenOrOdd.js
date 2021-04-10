function evenOrOdd(num) {
    if (Number(num) % 2 == 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

function evenOrOddTernary(num) {
    console.log(Number(num) % 2 == 0 ? 'even' : 'odd');
}

evenOrOdd('68');

console.log('====================');

evenOrOddTernary('68');