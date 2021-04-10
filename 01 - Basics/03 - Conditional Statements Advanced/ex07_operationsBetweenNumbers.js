function operationsBetweenNumbers(num1, num2, operation) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result = 0;
    let evenOrOdd = '';

    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = (num1 / num2).toFixed(2); break;
        case '%': result = num1 % num2; break;
    }

    switch (operation) {
        case '+':
        case '-':
        case '*':
            if (result % 2 == 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
            }
            
            console.log(`${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`);
            break;
            
        case '/':
        case '%':
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} ${operation} ${num2} = ${result}`);
            }
        break;
    }
}

operationsBetweenNumbers(123, 12, '/');