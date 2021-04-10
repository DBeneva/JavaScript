function division(...input) {
    let n = Number(input[0]);
    let dividableBy2 = 0;
    let dividableBy3 = 0;
    let dividableBy4 = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        
        if (num % 2 == 0) {
            dividableBy2 += 1;
        }
        
        if (num % 3 == 0) {
            dividableBy3 += 1;
        }

        if (num % 4 == 0) {
            dividableBy4 += 1;
        }
    }

    let p1 = dividableBy2 * 100 / n;
    let p2 = dividableBy3 * 100 / n;
    let p3 = dividableBy4 * 100 / n;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

division(1, 12);