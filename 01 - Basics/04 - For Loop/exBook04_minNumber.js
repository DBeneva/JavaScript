function minNumber(...input) {
    let n = input[0];
    let min = Number.POSITIVE_INFINITY;
    
    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        
        if (num < min) {
            min = num;
        }
    }

    return min;
}

function minNumberArr(...input) {
    return input
        .map(Number)
        .slice(1)
        .sort((a, b) => a - b)[0];
}

console.log(minNumber(3, -10, 20, -30));

console.log('====================');

console.log(minNumberArr(3, -10, 20, -30));