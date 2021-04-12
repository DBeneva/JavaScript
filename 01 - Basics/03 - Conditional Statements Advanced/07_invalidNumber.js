function invalidNumber(num) {
    num = Number(num);

    if ((num < 100 && num != 0) || num > 200) {
        return 'invalid';
    }

    return '';
}

function invalidNumberTern(num) {
    num = Number(num);

    return (num < 100 && num != 0) || num > 200 ? 'invalid' : '';
}

console.log(invalidNumber('0'));

console.log('====================');

console.log(invalidNumberTern(10));