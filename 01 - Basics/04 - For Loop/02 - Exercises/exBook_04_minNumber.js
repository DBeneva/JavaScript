function printMinNum(input) {
    let n = input[0], min = Number.POSITIVE_INFINITY;
    
    for (let i = 1; i <= n; i++) {
        min = Math.min(Number(input[i]), min);
    }

    console.log(min);
}

function printMinNumArray(input) {
    const n = Number(input[0]);
    const numbers = input
        .slice(1, n + 1)
        .map(Number)
        .sort((a, b) => a - b);
    
    console.log(numbers[0]);
}

printMinNum([3, -10, 20, -30]);
console.log('====================');
printMinNumArray([3, -10, 20, -30]);