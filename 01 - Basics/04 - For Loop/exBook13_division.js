function division(...input) {
    const n = Number(input[0]);
    
    let dividableBy2 = 0;
    let dividableBy3 = 0;
    let dividableBy4 = 0;

    for (let i = 1; i <= n; i++) {
        const current = Number(input[i]);
        
        if (current % 2 == 0) {
            dividableBy2 += 1;
        }
        
        if (current % 3 == 0) {
            dividableBy3 += 1;
        }

        if (current % 4 == 0) {
            dividableBy4 += 1;
        }
    }

    const percentageDividableBy2 = dividableBy2 * 100 / n;
    const percentageDividableBy3 = dividableBy3 * 100 / n;
    const percentageDividableBy4 = dividableBy4 * 100 / n;

    return `${percentageDividableBy2.toFixed(2)}%
${percentageDividableBy3.toFixed(2)}%
${percentageDividableBy4.toFixed(2)}%`;
}

function division(...numbers) {
    numbers.map(Number);

    const n = numbers.shift();
    const percentageDividableBy2 = numbers.filter();
    let dividableBy3 = 0;
    let dividableBy4 = 0;

    for (let i = 1; i <= n; i++) {
        const num = Number(numbers[i]);
        
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

    let percentageDividableBy2 = dividableBy2 * 100 / n;
    let percentageDividableBy3 = dividableBy3 * 100 / n;
    let percentageDividableBy4 = dividableBy4 * 100 / n;

    return `${percentageDividableBy2.toFixed(2)}%
${percentageDividableBy3.toFixed(2)}%
${percentageDividableBy4.toFixed(2)}%`;
}

console.log(division(1, 12));

console.log('====================');

console.log(divisionArr(1, 12));