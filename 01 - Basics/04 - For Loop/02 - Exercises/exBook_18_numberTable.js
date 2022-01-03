function numberTable(n) {
    n = Number(n);
    let num = 0, line = '', output = '';

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            num = row + col - 1;
            if (num > n) num = 2 * n - num;
            
            if (col == 1) line = '';
            else line += ' ';         
            line += num;
        }
        
        output += line + '\n';
    }

    console.log(output.trim());
}

numberTable(4);