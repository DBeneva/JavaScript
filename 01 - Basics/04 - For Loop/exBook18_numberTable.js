function numberTable(n) {
    n = Number(n);
    let num = 0;
    let line = '';
    let result = '';

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
        
        result += line + '\n';
    }

    return result.trim();
}

function numberTableArr(n) {
    n = Number(n);
    
    const table = [];

    for (let row = 1; row <= n; row++) {
        const line = [];

        for (let col = 1; col <= n; col++) {
            const current = row + col - 1;
            line.push(current <= n ? current : 2 * n - current);
        }

        table.push(line.join(' '));
    }

    return table.join('\n');
}

console.log(numberTable(4));

console.log('====================');

console.log(numberTableArr(4));