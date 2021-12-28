function sumNumbers(input) {
    let sum = 0;

    for (let i = 1; i < input.length; i++) {
        sum += Number(input[i]);
    }

    console.log(sum);
}

function sumNumbersArray(input) {
    const output = input
        .slice(1)
        .reduce((acc, curr) => acc + Number(curr), 0);
    
    console.log(output);
}

sumNumbers([10, 3, 45]);
console.log('====================');
sumNumbersArray([10, 3, 45]);