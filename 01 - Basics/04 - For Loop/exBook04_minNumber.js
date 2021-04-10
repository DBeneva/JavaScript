function minNumber(...input) {
    let n = input[0];
    let min = Number.POSITIVE_INFINITY;
    
    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        
        if (num < min) {
            min = num;
        }
    }

    console.log(min);
}

minNumber(3, -10, 20, -30);