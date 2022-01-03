function oddEvenPosition(input) {
    const numbers = input.slice(1, Number(input[0]) + 1).map(Number);
    const oddNumbers = numbers.filter((_, i) => i % 2 == 0);
    const oddSum = oddNumbers.reduce((acc, curr) => acc + curr, 0);
    const oddMin = oddNumbers[0] ? Math.min(...oddNumbers) : 'No';
    const oddMax = oddNumbers[0] ? Math.max(...oddNumbers) : 'No';
    const evenNumbers = numbers.filter((_, i) => i % 2 != 0);
    const evenSum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
    const evenMin = evenNumbers[0] ? Math.min(...evenNumbers) : 'No';
    const evenMax = evenNumbers[0] ? Math.max(...evenNumbers) : 'No';
    
    console.log(
        `OddSum=${oddSum},\n` +
        `OddMin=${oddMin},\n` +
        `OddMax=${oddMax},\n` +
        `EvenSum=${evenSum},\n` +
        `EvenMin=${evenMin},\n` +
        `EvenMax=${evenMax}`
    );
}

oddEvenPosition([3, -1, -2, -3]);