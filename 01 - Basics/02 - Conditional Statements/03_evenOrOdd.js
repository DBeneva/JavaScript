function evenOrOdd(num) {
    if (Number(num) % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

function evenOrOddTern(num) {
    return Number(num) % 2 == 0 ? 'even' : 'odd';
}

console.log(evenOrOdd('68'));

console.log('====================');

console.log(evenOrOddTern('68'));