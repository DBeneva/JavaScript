function powersOfTwo(num) {
    num = Number(num);
    let result = '';

    for (let i = 0; i <= num; i++) {
        result += Math.pow(2, i) + '\n';
    }

    return result.trim();
}

function powersOfTwoArr(num) {
    num = Number(num);
    
    return Array
        .from(Array(num + 1), (_, i) => num ** i)
        .join('\n');
}

console.log(powersOfTwo(2));

console.log('====================');

console.log(powersOfTwoArr(2));