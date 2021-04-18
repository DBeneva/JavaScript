function numbers1ToNWithStep3(num) {
    num = Number(num);
    let result = '';

    for (let i = 1; i <= num; i += 3) {
        result += i + '\n';
    }

    return result.trim();
}

function numbers1ToNWithStep3Arr(num) {
    const length = Math.floor((Number(num) - 1) / 3) + 1;
    
    return Array
        .from(Array(length), (v = 1, i) => v + 3 * i)
        .join('\n');
}

console.log(numbers1ToNWithStep3(45));

console.log('====================');

console.log(numbers1ToNWithStep3Arr(45));
