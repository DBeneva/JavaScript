function numberTable(n) {
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

    console.log(table.join('\n'));
}

numberTable(4);