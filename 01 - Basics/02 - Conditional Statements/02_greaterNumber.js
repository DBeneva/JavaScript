function getGreater(first, second) {
    first = Number(first);
    second = Number(second);

    if (first > second) {
        return first;
    } else {
        return second;
    }
}

function getGreaterTern(...input) {
    const [first, second] = input.map(Number);

    return first > second ? first : second;
}

console.log(getGreater('5', '17'));

console.log('====================');

console.log(getGreaterTern('5', '17'));