function printNumbersIn7() {
    for (let i = 0; i < 1000; i++) {
        if (i % 10 == 7) console.log(i);
    }
}

function printNumbersIn7Array() {
    const output = Array
        .from(Array(1000), (_, i) => i + 1)
        .filter(x => x % 10 == 7)
        .join('\n');
    
    console.log(output);
}

printNumbersIn7();
console.log('====================');
printNumbersIn7Array();