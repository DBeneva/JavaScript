function digits(n) {
    n = Number(n);

    let num = n;
    let num1 = Math.floor(num / 100);
    let num2 = Math.floor(n / 10) % 10;
    let num3 = n % 10;
    let result = '';

    for (let rows = 1; rows <= num1 + num2; rows++) {
        for (let numbersPerRow = 1; numbersPerRow <= num1 + num3; numbersPerRow++) {
            if (num % 5 == 0) {
                num -= num1;
            } else if (num % 3 == 0) {
                num -= num2;
            } else {
                num += num3;
            }

            result += num + ' ';
        }

        result += '\n';
    }

    return result.trim();
}

function digitsArr(n) {
    n = Number(n);

    const firstDigit = Math.floor(n / 100);
    const secondDigit = Math.floor(n / 10) % 10;
    const thirdDigit = n % 10;
    const matrix = [];

    let current = n;

    for (let row = 1; row <= firstDigit + secondDigit; row++) {
        const line = [];

        for (let col = 1; col <= firstDigit + thirdDigit; col++) {
            current -= current % 5 == 0 ?
                firstDigit : current % 3 == 0 ?
                    secondDigit : -thirdDigit;

            line.push(current);
        }

        matrix.push(line.join(' '));
    }

    return matrix.join('\n')
}

console.log(digits('132'));

console.log('====================');

console.log(digitsArr('132'));