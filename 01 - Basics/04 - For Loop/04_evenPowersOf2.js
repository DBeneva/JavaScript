function printEvenPowersOf2(num) {
    num = Number(num);

    for (let i = 0; i <= num; i += 2) {
        console.log(2 ** i);
    }
}

function printEvenPowersOf2Array(num) {
    const length = Math.floor(Number(num) / 2) + 1;
    const output = Array
        .from(Array(length), (_, i) => Math.pow(2, i * 2))
        .join('\n');

    console.log(output);
}

printEvenPowersOf2(7);
console.log('====================');
printEvenPowersOf2Array(6);