function evenPowersOf2(num) {
    num = Number(num);
    let result = '';

    for (let i = 0; i <= num; i += 2) {
        result += Math.pow(2, i) + '\n'; // or 2 ** i        
    }

    return result.trim();
}

function evenPowersOf2Arr(num) {
    const length = Math.floor(Number(num) / 2) + 1;

    return Array
        .from(Array(length), (_, i) => Math.pow(2, i * 2))
        .join('\n');
}

console.log(evenPowersOf2(7));

console.log('====================');

console.log(evenPowersOf2Arr(6));