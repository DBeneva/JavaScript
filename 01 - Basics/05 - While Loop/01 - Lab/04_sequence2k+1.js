function sequence(n) {
    n = Number(n);
    let current = 1;

    while (current <= n) {
        console.log(current);
        current = current * 2 + 1;
    }
}

function sequenceArr(n) {
    const numbers = Array.from(Array(Number(n)).fill(1));    
    numbers.forEach((_, i) => {
        const next = numbers[i] * 2 + 1;
        if (i >= 0 && next <= Number(n)) numbers[i + 1] = next;
        else numbers[i + 1] = 1;
    });
    
    console.log(numbers.slice(0, numbers.indexOf(1, 1)).join('\n'));
}

sequence(1);
console.log('====================');
sequenceArr(31);