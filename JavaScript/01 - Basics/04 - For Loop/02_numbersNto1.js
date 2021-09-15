function numbersNto1(num) {
    num = Number(num);
    let result = '';

    for (let i = num; i >= 1; i--) {
        result += i + '\n';
    }

    return result.trim();
}

function numbersNto1Arr(num) {
    num = Number(num);

    return Array
        .from(Array(num), (_, i) => num - i)
        .join('\n');
}

console.log(numbersNto1(5));

console.log('====================');

console.log(numbersNto1Arr(5));