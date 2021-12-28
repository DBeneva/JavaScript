function printSpecialSum(...input) {
    const [start, end, divider] = input.map(Number);
    
    const output = Array
        .from(Array(end - start + 1), (_, i) => i + start)
        .filter(x => x % divider == 0)
        .reduce((acc, curr) => acc + curr, 0);
    
    console.log(output);
}

printSpecialSum(61, 125, 25);