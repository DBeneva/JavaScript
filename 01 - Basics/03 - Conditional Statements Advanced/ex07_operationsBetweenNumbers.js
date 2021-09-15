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
    const operations = {
        '+': getResult('+'),
        '-': getResult('-'),
        '*': getResult('*'),
        '/': second != 0 ? getResult('/') : `Cannot divide ${first} by zero`,
        '%': second != 0 ? getResult('%') : `Cannot divide ${first} by zero`,
    };
    
    return operations[operator].result + operations[operator].additionalInfo;
    
    function getResult(operator) {
        first = Number(first);
        second = Number(second);
        
        return {
            result: `${first} ${operator} ${second} = ${calculate(operator)}`,
            additionalInfo: ['+', '-', '*'].includes(operator) ? ` - ${calculate(operator) % 2 == 0 ? 'even' : 'odd'}` : ''
        };
        
        function calculate(operator) {
            const operations = {
                '+': first + second,
                '-': first - second,
                '*': first * second,
                '/': first / second,
                '%': first % second                
            };

            return operations[operator].toFixed(2);
        }
    }
}

console.log(calculateNumbers([10, 12, '/']));

console.log('====================');

console.log(calculateNumbersObj([10, 12, '/']));