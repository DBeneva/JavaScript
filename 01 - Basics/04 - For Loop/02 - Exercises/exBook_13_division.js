function division(input) {
    const n = Number(input[0]);
    
    let divisibleBy2 = 0, divisibleBy3 = 0, divisibleBy4 = 0;

    for (let i = 1; i <= n; i++) {
        const current = Number(input[i]);
        
        if (current % 2 == 0) divisibleBy2 += 1;        
        if (current % 3 == 0) divisibleBy3 += 1;
        if (current % 4 == 0) divisibleBy4 += 1;
    }

    console.log(
        `${(divisibleBy2 * 100 / n).toFixed(2)}%\n` +
        `${(divisibleBy3 * 100 / n).toFixed(2)}%\n` +
        `${(divisibleBy4 * 100 / n).toFixed(2)}%`
    );
}

division([3, 10, 13, 12]);