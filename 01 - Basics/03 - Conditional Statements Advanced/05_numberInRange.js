function inRange(num) {
    num = Number(num);
    let output = '';

    if (num >= -100 && num <= 100 && num != 0) {
        output = 'Yes';
    } else {
        output = 'No';
    }

    return output;
}

function inRangeTernary(num) {
    num = Number(num);

    return num >= -100 && num <= 100 && num != 0 ? 'Yes' : 'No';
}

console.log(inRange(0));

console.log('====================');

console.log(inRangeTernary(100));