function sumNumbers(input) {
    let sum = 0;
    let inputLine = input.shift();

    while (inputLine != 'Stop') {
        sum += Number(inputLine);
        inputLine = input.shift();
    }

    console.log(sum);
}

sumNumbers(['10', '20', '30', '45', 'Stop']);