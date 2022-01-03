function digits(n) {
    n = Number(n);

    const firstDigit = Math.floor(n / 100);
    const secondDigit = Math.floor(n / 10) % 10;
    const thirdDigit = n % 10;
    const matrix = [];

    for (let row = 1; row <= firstDigit + secondDigit; row++) {
        const line = [];

        for (let col = 1; col <= firstDigit + thirdDigit; col++) {
            if (n % 5 == 0) n -= firstDigit;
            else if (n % 3 == 0) n -= secondDigit;
            else n -= -thirdDigit;

            line.push(n);
        }

        matrix.push(line.join(' '));
    }

    console.log(matrix.join('\n'));
}

digits('132');