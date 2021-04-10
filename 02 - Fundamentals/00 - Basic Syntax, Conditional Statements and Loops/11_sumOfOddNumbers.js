function sumOfOddNumbers(num) {
    num = Number(num);
    let sum = 0;
    
    for (let currentNumber = 1, count = 1; count <= num; currentNumber += 2, count++) {
        console.log(currentNumber);
        sum += currentNumber;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);