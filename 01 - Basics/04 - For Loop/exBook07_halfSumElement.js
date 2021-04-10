function halfSumElement(...input) {
    let n = Number(input[0]);
    let sum = 0;
    let max = Number.NEGATIVE_INFINITY;

    for (i = 1; i <= n; i++) {
        let num = Number(input[i]);
        sum += num;
    
        if (num > max) {
            max = num;
        }
    }

    if (max == sum / 2) {
        console.log('Yes');
        console.log(`Sum = ${sum / 2}`);
    } else {
        console.log('No');
        console.log(`Diff = ${Math.abs(max - (sum - max))}`);
    }
}

halfSumElement(3, 1, 1, 10);