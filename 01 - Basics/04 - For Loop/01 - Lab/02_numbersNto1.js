function printNumsNto1(num) {
    num = Number(num);

    for (let i = num; i >= 1; i--) {
        console.log(i);
    }
}

function printNumsNto1Array(num) {
    num = Number(num);
    const output = Array.from(Array(num), (_, i) => num - i).join('\n');

    console.log(output);
}

printNumsNto1(5);
console.log('====================');
printNumsNto1Array(5);