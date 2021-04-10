function invalid(num) {
    num = Number(num);
    let output = '';

    if ((num < 100 && num != 0) || num > 200) {
        output = 'invalid';
    }

    return output;
}

function invalidTernary(num) {
    num = Number(num);

    return (num < 100 && num != 0) || num > 200 ? 'invalid' : '';
}

console.log(invalid('0'));

console.log('====================');

console.log(invalidTernary(10));