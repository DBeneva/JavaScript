function digits(n) {
    n = Number(n);

    let firstDigit = Math.floor(n / 100);
    let secondDigit = Math.floor(n / 10) % 10;
    let thirdDigit = n % 10;
    let output = '';

    for (let row = 1; row <= firstDigit + secondDigit; row++) {
        for (let col = 1; col <= firstDigit + thirdDigit; col++) {
            if (n % 5 == 0) n -= firstDigit;
            else if (n % 3 == 0) n -= secondDigit;
            else n += thirdDigit;

            output += n + ' ';
        }

        output = output.trim() + '\n';
    }

    console.log(output.trim());
}

digits('132');