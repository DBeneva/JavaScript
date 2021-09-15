function getGreaterNumber(first, second) {
    first = Number(first);
    second = Number(second);

    if (first > second) {
        return first;
    } else {
        return second;
    }
}

function getGreaterNumberTern(...input) {
    const [first, second] = input.map(Number);

    return first > second ? first : second;
}

console.log(getGreaterNumber('5', '17'));

console.log('====================');

console.log(getGreaterNumberTern('5', '17'));