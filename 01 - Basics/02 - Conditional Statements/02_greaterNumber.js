function greaterNumber(first, second) {
    first = Number(first);
    second = Number(second);

    if (first > second) {
        console.log(first);
    } else {
        console.log(second);
    }
}

function greaterNumberTernary(...input) {
    let [first, second] = input.map(Number);

    console.log(first > second ? first : second);
}

greaterNumber('5', '17');

console.log('====================');

greaterNumberTernary('5', '17');