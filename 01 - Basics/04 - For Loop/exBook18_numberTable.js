function numberTable(n) {
    n = Number(n);
    let num = 0;
    let line = '';

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            num = row + col - 1;
            
            if (col > 1) {
                line += ' ';
            } else {
                line = '';
            }

            if (num > n) {
                num = 2 * n - num;
            }
            
            line += num;
        }
        
        console.log(line);
    }
}

numberTable(4);