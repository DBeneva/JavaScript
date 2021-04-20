function maxNumber(...input) {
    const n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        const num = Number(input[i]);
        
        if (num > max) {
            max = num;
        }
    }

    return `max = ${max}`;
}

function maxNumberArr(...input) {
    const numbers = input.slice(1).map(Number);

    return `max = ${numbers.sort((a, b) => b - a)[0]}`;
}

console.log(maxNumber(4, 45, -20, 7, 99));

console.log('====================');

console.log(maxNumberArr(4, 45, -20, 7, 99));