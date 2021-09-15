function numberInRange(num) {
    num = Number(num);

    if (num >= -100 && num <= 100 && num != 0) {
        return 'Yes';
    } else {
        return 'No';
    }
}

function numberInRangeTern(num) {
    num = Number(num);

    return num >= -100 && num <= 100 && num != 0 ? 'Yes' : 'No';
}

console.log(numberInRange(0));

console.log('====================');

console.log(numberInRangeTern(100));