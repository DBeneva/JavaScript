function sumNumbers(input) {
    let sum = 0, i = 0;

    while (input[i] != 'Stop') {
        sum += Number(input[i]);
        i++;
    }

    console.log(sum);
}

function sumNumbersArr(input) {
    console.log(
        input
            .map(Number)
            .slice(0, input.indexOf('Stop'))
            .reduce((acc, curr) => acc + curr, 0)
    );
}

sumNumbers(['10', '20', '30', '45', 'Stop']);
console.log('====================');
sumNumbersArr(['10', '20', '30', '45', 'Stop']);