function triangleOfNumbers(n) {
    n = Number(n);

    for (let row = 1; row <= n; row++) {
        let outputLine = '';

        for (let col = 1; col <= row; col++) {
            outputLine += row + ' ';
        }

        console.log(outputLine);
    }
}

triangleOfNumbers(7);