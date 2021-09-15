function sumNumbers(input) {
    let sum = 0;
    let inputLine = input.shift();

    while (inputLine != 'Stop') {
        sum += Number(inputLine);
        inputLine = input.shift();
    }

    return sum;
}

function sumNumbersArr(input) {
    return input
        .map(Number)
        .slice(0, input.indexOf('Stop'))
        .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumNumbers(['10', '20', '30', '45', 'Stop']));

console.log('====================');

console.log(sumNumbersArr(['10', '20', '30', '45', 'Stop']));