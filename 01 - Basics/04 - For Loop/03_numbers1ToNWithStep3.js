function printNums1ToNStep3(num) {
    num = Number(num);

    for (let i = 1; i <= num; i += 3) {
        console.log(i);
    }
}

function printNums1ToNStep3Array(num) {
    const length = Math.floor((Number(num) - 1) / 3) + 1;
    const output = Array
        .from(Array(length), (v = 1, i) => v + 3 * i)
        .join('\n');

    console.log(output);
}

printNums1ToNStep3(45);
console.log('====================');
printNums1ToNStep3Array(45);
