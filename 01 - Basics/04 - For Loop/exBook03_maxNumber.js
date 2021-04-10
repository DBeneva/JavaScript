function maxNumber(...input) {
    let n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        
        if (num > max) {
            max = num;
        }
    }

    console.log('max = ' + max);
}

maxNumber(4, 45, -20, 7, 99);