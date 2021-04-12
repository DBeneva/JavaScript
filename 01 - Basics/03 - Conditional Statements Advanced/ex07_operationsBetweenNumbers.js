function calculateNumbers([first, second, operator]) {
    first = Number(first);
    second = Number(second);
    let result = 0;
    let additionalInfo = '';

    switch (operator) {
        case '+':
            result = `${first} + ${second} = ${first + second}`;

            if ((first + second) % 2 == 0) {
                additionalInfo = ' - even';
            } else {
                additionalInfo = ' - odd'
            }
            break;

        case '-':
            result = `${first} - ${second} = ${first - second}`;

            if ((first - second) % 2 == 0) {
                additionalInfo = ' - even';
            } else {
                additionalInfo = ' - odd'
            }
            break;

        case '*':
            result = `${first} * ${second} = ${first - second}`;

            if ((first * second) % 2 == 0) {
                additionalInfo = ' - even';
            } else {
                additionalInfo = ' - odd'
            }
            break;

        case '/':
            if (second == 0) {
                result = `Cannot divide ${first} by zero`;
            } else {
                result = `${first} / ${second} = ${(first / second).toFixed(2)}`;
            }
            break;

        case '%':
            if (second == 0) {
                result = `Cannot divide ${first} by zero`;
            } else {
                result = `${first} % ${second} = ${first % second}`;
            }
            break;
    }

    return result + additionalInfo;
}

function calculateNumbersObj([first, second, operator]) {
    first = Number(first);
    second = Number(second);

    const operations = {
        '+': {
            result: `${first} + ${second} = ${first + second}`,
            additionalInfo: ` - ${(first + second) % 2 == 0 ? 'even' : 'odd'}`
        },
        '-': {
            result: `${first} - ${second} = ${first - second}`,
            additionalInfo: ` - ${(first - second) % 2 == 0 ? 'even' : 'odd'}`
        },
        '*': {
            result: `${first} * ${second} = ${first * second}`,
            additionalInfo: ` - ${(first * second) % 2 == 0 ? 'even' : 'odd'}`
        },
        '/': {
            result: second != 0 ? `${first} / ${second} = ${(first / second).toFixed(2)}` : `Cannot divide ${first} by zero`,
            additionalInfo: ''
        },
        '%': {
            result: second != 0 ? `${first} % ${second} = ${first % second}` : `Cannot divide ${first} by zero`,
            additionalInfo: ''
        }
    };

    return operations[operator].result + operations[operator].additionalInfo;
}

console.log(calculateNumbers([10, 12, '+']));

console.log('====================');

console.log(calculateNumbersObj([10, 12, '+']));