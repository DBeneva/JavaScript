function specialSumOfNumbers(start, end, divider) {
    start = Number(start);
    end = Number(end);
    divider = Number(divider);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % divider == 0) {
            sum += i;
        }
    }
    
    return sum;
}

function specialSumOfNumbersArr(...input) {
    const [start, end, divider] = input.map(Number);
    
    return Array
        .from(Array(end - start + 1), (_, i) => i + start)
        .filter(x => x % divider == 0)
        .reduce((acc, curr) => acc + curr, 0);
}

console.log(specialSumOfNumbers(61, 125, 25));

console.log('====================');

console.log(specialSumOfNumbersArr(61, 125, 25));